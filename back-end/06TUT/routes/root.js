const express = require("express")
const router = express.Router()
const path = require("path")

router.get("^/$|/index(.html)?", (req, res) => {
  // like this we are serving a file through the res.sendFile
  // res.sendFile("./views/index.html", {
  //   root: __dirname
  // })
  // the other way to serve a file
  res.sendFile(path.join(__dirname, "..", "views", "index.html"))
})

module.exports = router
