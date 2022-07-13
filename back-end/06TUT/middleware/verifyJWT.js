const jwt = require("jsonwebtoken")


// the verify JWT was developed through https://www.youtube.com/watch?v=f2EqECiTBL8&ab_channel=DaveGray
const verifyJWT = (req, res, next) => {
  // defining the auth header the authorization can come with an upper case or lower case
  const authHeader = req.headers.authorization || req.headers.Authorization
  if (!authHeader?.startsWith("Bearer")) return res.sendStatus(401)
  console.log(authHeader) // Bearer token
  // defining the token
  const token = authHeader.split(" ")[1]
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403) // invalid token
    req.user = decoded.UserInfo.username
    req.roles = decoded.UserInfo.roles
    //  method is an inbuilt method in JavaScript which is used to return an object with two properties done and value.
    next()
  })
}

module.exports = verifyJWT
