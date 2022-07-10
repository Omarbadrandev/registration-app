// You should already know:
// HTML,CSS and Javascript
// Possibly experience with other libraries and frameworks

//  How nodeJS differs from Vanilla JS
//  1) Node runs on a server - not in a browser (backend or frontend)
//  2) The console is the terminal window

// console.log("Hello World")
// 3) global object instead of window object
// Node. js Global Objects are the objects that are available in all modules.
// Global Objects are built-in objects that are part of the JavaScript and can be used directly in the application without importing any particular module

// In JavaScript, there is always a global object defined. In a web browser,
// when scripts create global variables defined with the var keyword, they are created as members of global object.
// In Nodes.js this is not in the case the global object's interface depends on the execution context in which the script is running. For example:

// - In a web browser, any code which the script doesn't specifically start up as a background task has a Window as its global object. This is the vast majority of JavaScript code on the Web.
// Code running in a Worker has a WorkerGlobalScope object as its global object.
// Scripts running under Node.js have an object called global as their global object.
// global is the keyword of the global object
// console.log(global)
// 4) Has common Core modules that we will explore
// 5) CommonJS modules instead of ES6 imports
// 6) Missing some JS APIs like fetch

// this is an example how importing in Node
// The OS module provides information about the computer's operating system.
const os = require("os")
const path = require("path")

const { add, subtract, multiply, divide } = require("./math")

console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())
// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// // Path.parse give us an object will the information about the filename
// console.log(path.parse(__filename))
