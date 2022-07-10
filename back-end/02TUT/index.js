// The built-in Node. js file system module helps us store, access, and manage data on our operating system.
// Commonly used features of the fs module include fs.
// readFile to read data from a file, fs.
// fs stands for File System
const fs = require("fs")
const fsPromises = require("fs").promises
const path = require("path")

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    )

    console.log(data)

    // unlink is actually a delete function which now will delete the original file starter.txt
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"))

    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    )

    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nNice To meet you."
    )

    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    )

    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf8"
    )

    console.log(newData)
  } catch (err) {
    console.err(err)
  }
}

fileOps()

// UTF-8 is a variable-width character encoding used for electronic communication.
// Defined by the Unicode Standard, the name is derived from Unicode Transformation Format – 8-bit.
// UTF-8 is capable of encoding all 1,112,064 valid character code points in Unicode using one to four one-byte code units.
// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err
//     console.log(data.toString())
//   }
// )

// console.log("Hello...")

// exiting on uncaught errors
// Node. js provides the facility
// to get process information such as process id, architecture, platform, version, release, uptime, upu usage etc.
// process.on("uncaughtException", (err) => {
//   // consoling the error and then exiting the process
//   console.error(`There was an un caught error: ${err}`)
//   process.exit(1)
// })

// // we dont need to specify the UTF8
// this code is working but this is callback hell as shown in the code the functions are inside each other
// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice To Meet you.",
//   (err) => {
//     //  the callback will have only the error because will not read the data here
//     if (err) throw err
//     console.log("write complete")

//     // The write mode creates a new file.
//     // append mode is used to add the data at the end of the file if the file already exists.
//     // If the file is already existing write mode overwrites it. Otherwise creates a new one.

//     // To "overwrite" something is to put something else in its place, destroying the thing overwritten.
//     // To "override" something is to cause something else to operate instead of it without harming or changing the thing overridden.
//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n\nYes it is",
//       (err) => {
//         //  the callback will have only the error because will not read the data here
//         if (err) throw err
//         console.log("Append complete")

//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "newReply.txt"),
//           (err) => {
//             //  the callback will have only the error because will not read the data here
//             if (err) throw err
//             console.log("Rename complete")
//           }
//         )
//       }
//     )
//   }
// )
