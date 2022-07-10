const http = require("http")
const path = require("path")
const fs = require("fs")

//  As of NodeJS version 10.0, you can now use FS.promises

//  a solution to all the problems that you'd face with thenables when you use Promises.

//  You can neatly and directly use the FS.promises API and the clean async/await syntax.

//  You do not have to use any other external dependencies.

const fsPromises = require("fs").promises

const logEvents = require("./logEvents")

const EventEmitter = require("events")

class Emitter extends EventEmitter {}

//  initialize object
const myEmitterObject = new Emitter()
myEmitterObject.on("log", (msg, fileName) => logEvents(msg, fileName))

// because if we want to host this somewhere it will be defined process.env.PORT

// but we defined here the port that we will use now after the or ||

const PORT = process.env.PORT || 3500

// this the function for serving the file

// it needs to be an async function

const serveFile = async (filePath, contentType, response) => {
  try {
    const rawData = await fsPromises.readFile(
      filePath,
      !contentType.includes("image") ? "utf8" : ""
    )
    const data =
      contentType === "application/json" ? JSON.parse(rawData) : rawData
    // writeHead is an inbuilt property of the 'http' module which sends a response header to the request
    response.writeHead(filePath.includes("404.html") ? 404 : 200, {
      "content-Type": contentType
    })
    response.end(
      contentType === "application/json" ? JSON.stringify(data) : data
    )
  } catch (error) {
    console.log(error)
    response.statusCode = 500
    myEmitterObject.emit("log", `${error.name}: ${error.message}`, "errLog.txt")
    response.end()
  }
}

// in the createServer() method turns the computer into an HTTP server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method)
  myEmitterObject.emit("log", `${req.url}\t${req.method}`, "reqlog.txt")
  //  building the path to serve the file
  // let path

  // this way is not so efficient because we need always to define the path we are routing to
  // if (req.url === "/" || req.url === "index.html") {
  //   res.statusCode = 200
  //   res.setHeader("Content-Type", "text/html")
  //   path = path.join(__dirname, "views", "index.html")
  //   // we will read the file and then send the data in the index.html file
  //   fs.readFile(path, "utf8", (err, data) => {
  //     res.end(data)
  //   })
  // }

  // second way is to define a switch statement that listens to the req.url and that way is not dynamic because it will be so big
  // switch (req.url) {
  //   case "/":
  //     res.statusCode = 200
  //     path = path.join(__dirname, "views", index.html)
  //     fs.readFile(path, "utf8", (err, data) => {
  //       res.end(data)
  //     })
  //     break
  // }

  // like this we can look to the extention of the request url
  // defining the extention
  const extention = path.extname(req.url)

  let contentType

  // to set the content type so we need to find all the possibilities for file extensions
  // and there are several file extensions in order to do so I have build the switch statement which may include all the possible file extensions
  switch (extention) {
    case ".css":
      contentType = "text/css"
      break
    case ".js":
      contentType = "text/javascript"
      break
    case ".json":
      contentType = "application/json"
      break
    case ".jpg":
      contentType = "image/jpeg"
      break
    case ".jpeg":
      contentType = "image/jpeg"
      break
    case ".png":
      contentType = "image/png"
      break
    case ".txt":
      contentType = "text/plain"
      break
    // the default is the text/html because this could not have an extension at all
    // it could just be the / 'slash' or it could have the extension of html
    // and so w just handle that as the default
    default:
      contentType = "text/html"
  }

  // chained ternary statements
  let filePath =
    contentType === "text/html" && req.url === "/"
      ? path.join(__dirname, "views", "index.html")
      : contentType === "text/html" && req.url.slice(-1) === "/"
      ? path.join(__dirname, "views", req.url, "index.html")
      : contentType === "text/html"
      ? path.join(__dirname, "views", req.url)
      : path.join(__dirname, req.url)

  // makes .html extension not required in the browser
  if (!extention && req.url.slice(-1) !== "/") filePath += ".html"

  const fileExists = fs.existsSync(filePath)

  if (fileExists) {
    //serve the file
    serveFile(filePath, contentType, res)
  } else {
    // this could be 404
    // 301 redirect
    // The path.parse() method is used to return an object whose properties represent the given path. This method returns the following properties:
    // root (root name)
    // dir (directory name)
    // base (filename with extension)
    // ext (only extension)
    // name (only filename)
    // https://www.geeksforgeeks.org/node-js-path-parse-method/
    switch (path.parse(filePath).base) {
      case "old-page.html":
        // here we are handling the redirect
        // The response.writeHead() (Added in v1..0) property is an inbuilt property of the ‘http’ module which sends a response header to the request.
        // The status code is a 3-digit HTTP status code, like 404. The last argument, headers, are the response headers. Optionally one can give a human-readable statusMessage as the second argument.
        res.writeHead(301, { Location: "/new-page.html" })
        res.end()
        break
      case "www-page.html":
        // here we are handling the redirect
        // The response.writeHead() (Added in v1..0) property is an inbuilt property of the ‘http’ module which sends a response header to the request.
        // The status code is a 3-digit HTTP status code, like 404. The last argument, headers, are the response headers. Optionally one can give a human-readable statusMessage as the second argument.
        res.writeHead(301, { Location: "/" })
        res.end()
        break
      default:
        // serve a 404 response
        serveFile(path.join(__dirname, "views", "404.html"), "text/html", res)
    }
  }
})

//this should be always at the end of the server.js file
//The server.listen() method creates a listener on the specified port or path.
// https://www.w3schools.com/nodejs/met_server_listen.asp
// just to memorize it ;) anonymous function looks like this () => console.log()
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
