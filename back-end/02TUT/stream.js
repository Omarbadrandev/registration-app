//  UTF-8 stands for “Unicode Transformation Format - 8 bits.”
//  The most basic unit of binary is a bit, which is just a single 1 or 0.
//  The next largest unit of binary, a byte, consists of 8 bits. An example of a byte is “01101011”.
//  this is to read the lorem.txt file

// when we have large files is not good to grab all of the data at once it could be too much just like

// the speaking of effeciency

const fs = require("fs")

const rs = fs.createReadStream("./files/lorem.txt", {
  encoding: "utf8"
})

// writable stream
const ws = fs.createWriteStream("./files/new-lorem.txt")

rs.on("data", (dataChunk) => {
  ws.write(dataChunk)
})

rs.pipe(ws)
