require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const path = require("path")
const { logger } = require("./middleware/logEvents")
const errHandler = require("./middleware/errorHandler")
const verifyJWT = require("./middleware/verifyJWT")
const credentials = require("./middleware/credentials")
const cookieParser = require("cookie-parser")
const PORT = process.env.PORT || 3500
const mongoose = require("mongoose")
const connectDB = require("./config/dbConn")

//  connect to MongoDB
connectDB()

// custom middleware logger
app.use(logger)

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
// because if CORS sees that header is not defined it will through the CORS Error

app.use(credentials)

app.use(cors(corsOptions))

// built-in middleware to handle urlencoded data
// in other words, form data:
// content-type : application/x-www-form-urlencoded
// app.use is what we often use to apply middleware

app.use(express.urlencoded({ extended: false }))

//  built-in middleware for json

app.use(express.json())

// middleware for cookies
app.use(cookieParser())

// routes
app.use("/", express.static(path.join(__dirname, "/public")))

// here we are defining the routes we use
app.use("/", require("./routes/root"))
app.use("/register", require("./routes/register"))
app.use("/auth", require("./routes/auth"))
app.use("/refresh", require("./routes/refresh"))
app.use("/logout", require("./routes/logout"))

// after the app.use JWT everything will use the verifyJWT
app.use(verifyJWT)
app.use("/employees", require("./routes/api/employees"))
app.use("/users", require("./routes/api/users"))
// chaining route handlers
const one = (req, res, next) => {
  console.log("one")
  next()
}

const two = (req, res, next) => {
  console.log("two")
  next()
}

const three = (req, res) => {
  console.log("three")
  res.send("Finished!")
}

app.get("/chain(.html)?", [one, two, three])

app.all("*", (req, res) => {
  res.status(404)
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"))
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not found" })
  } else {
    res.type("txt").send("404 Not found")
  }
})

app.use(errHandler)

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB")
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
})
