// const usersDB = {
//   users: require("../model/users.json"),
//   setUsers: function (data) {
//     this.users = data
//   }
// }
const User = require("../model/User")
const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")

// const fsPromises = require("fs").promises
// const path = require("path")

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body
  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "Username and password are required." })
  const foundUser = await User.findOne({ username: user }).exec()
  if (!foundUser) return res.sendStatus(401) // Unauthorized
  // evaluate password
  const match = await bcrypt.compare(pwd, foundUser.password)
  if (match) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
    const roles = Object.values(foundUser.roles)
    // create JWTs
    // the first thing we need to pass into the jwt as a payload
    // so what we are going to use is our username object
    // we don't want to pass in anything like a password or anything that would otherwise hurt the security, why?
    // because this is available to all if they get a hold of your token so what we want to pass in is just the username
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: foundUser.username,
          roles: roles
        }
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "30s"
      }
    )

    const refreshToken = jwt.sign(
      {
        username: foundUser.username
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d"
      }
    )

    // Saving refreshToken with current user
    foundUser.refreshToken = refreshToken
    const result = await foundUser.save()
    // console.log(result)

    // const otherUsers = usersDB.users.filter(
    //   (person) => person.username !== foundUser.username
    // )

    // //  Saving refreshToken with current user : this will allow us to invalidate that refresh token as the current user logs out
    // //  before their one day has expired
    // const currentUser = { ...foundUser, refreshToken }

    // usersDB.setUsers([...otherUsers, currentUser])
    // await fsPromises.writeFile(
    //   path.join(__dirname, "..", "model", "users.json"),
    //   JSON.stringify(usersDB.users)
    // )

    const expiryDate = 24 * 60 * 60 * 1000
    // http only cookie is that it is not available to javascript
    // it is not 100% secure  but it is much more secure than storing your refresh token in local storage or in another cookie that is available to javascript
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite

    // Same site:

    // Strict
    // Cookies will only be sent in a first-party context and not be sent along with requests initiated by third party websites.
    // None
    // Cookies will be sent in all contexts, i.e. in responses to both first-party and cross-site requests.
    // If SameSite=None is set, the cookie Secure attribute must also be set (or the cookie will be blocked)
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      // secure: true,
      maxAge: expiryDate
    })

    res.json({ roles, accessToken })
  } else {
    res.sendStatus(401)
  }
}

module.exports = { handleLogin }
