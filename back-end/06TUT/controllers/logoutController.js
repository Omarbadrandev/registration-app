// const usersDB = {
//   users: require("../model/users.json"),
//   setUsers: function (data) {
//     this.users = data
//   }
// }

// const fsPromises = require("fs").promises
// const path = require("path")
const User = require("../model/User")
const handleLogout = async (req, res) => {
  // On client, also delete the accessToken
  const cookies = req.cookies
  if (!cookies?.jwt) return res.sendStatus(204) // No content to send back

  const refreshToken = cookies.jwt

  // Is refreshToken in db ?
  // this was used when we were using .json models
  // const foundUser = usersDB.users.find(
  //   (person) => person.refreshToken === refreshToken
  // )

  const foundUser = await User.findOne({ refreshToken }).exec()

  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true })
    return res.sendStatus(204) // 204: means it was successfull but no content
  }

  // Delete the refreshToken in db
  // this was used when we were using .json models
  // const otherUsers = usersDB.users.filter(
  //   (user) => user.refreshToken !== foundUser.refreshToken
  // )

  // const currentUser = { ...foundUser, refreshToken: "" }

  // usersDB.setUsers([...otherUsers, currentUser])

  // await fsPromises.writeFile(
  //   path.join(__dirname, "..", "model", "users.json"),
  //   JSON.stringify(usersDB.users)
  // )

  //Delete the refreshToken in MongoDB
  foundUser.refreshToken = ""
  const result = await foundUser.save()
  console.log(result)

  res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true }) // secure: true - only servers on https

  res.sendStatus(204)
}

module.exports = { handleLogout }
