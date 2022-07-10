const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data
  }
}

const fsPromises = require("fs").promises
const path = require("path")
const bcrypt = require("bcrypt")

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body
  console.log(user, pwd)
  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "Username and Password are required" })
  // check for duplicate usernames in the db
  const duplicate = usersDB.users.find((person) => person.username === user)
  if (duplicate) return res.sendStatus(409) // Conflict this what 400 status code stands for

  try {
    //  encrypt the password
    //  what is salt Rounds: https://stackoverflow.com/questions/46693430/what-are-salt-rounds-and-how-are-salts-stored-in-bcrypt
    //  With "salt round" they actually mean the cost factor.
    //  The cost factor controls how much time is needed to calculate a single BCrypt hash.
    //  The higher the cost factor, the more hashing rounds are done.
    //  Increasing the cost factor by 1 doubles the necessary time.

    // another explanation: the salt round really help protect the password if the database is somehow
    // compromised because at that point if a hacker were able to figure out the hash the could crack all the passwords in the database
    // but adding the individual salts makes that much more difficult and unique for each one
    const hashedPwd = await bcrypt.hash(pwd, 10)

    // store the new user
    const newUser = {
      username: user,
      roles: { user: 2001 },
      password: hashedPwd
    }

    usersDB.setUsers([...usersDB.users, newUser])
    // here we have to write the new users data to the json file
    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.json"),
      // here we need to specify the data we are sending
      JSON.stringify(usersDB.users)
    )
    console.log(usersDB.users)
    //  then we need send the status
    res.status(201).json({ success: `new user ${user} created!` })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { handleNewUser }
