// fs : file stream
const fs = require("fs")

//  Returns true if the path exists, false otherwise.
if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err
    console.log("directory created")
  })
}

//  Returns true if the path exists, false otherwise.

if (fs.existsSync("./new")) {
  //rm stands for remove directory
  fs.rmdir("./new", (err) => {
    if (err) throw err
    console.log("directory created")
  })
}
