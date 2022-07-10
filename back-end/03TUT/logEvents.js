// npm CLI : node package manager - Command Line Interface

console.log("testing!")

// date-fns: stands for date functions

// Modern JavaScript date utility library.

const { format } = require("date-fns")

//  v4 is a specific version of uuid and we are importing it as uuid as presented in the next code line

//  it could be called as const uuid = require('uuid') but then each time we need call the uuid function we should specify the version

//  an example for calling the uuid with specifying the version is: uuid.v4()

//  usefull documentation would be https://www.geeksforgeeks.org/node-js-npm-uuid/

const { v4: uuid } = require("uuid")

const fs = require("fs")
const fsPromises = require("fs").promises
const path = require("path")

const logEvents = async (message) => {

  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`

  const logItem = `${dateTime}\t${uuid()}\t${message}\n`

  console.log(logItem)

  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"))
    }
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "eventlog.txt"),
      logItem
    )
  } catch (error) {
    console.log(error)
  }
}

//https://date-fns.org/docs/Getting-Started

console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"))

console.log(uuid())

// console.log()

module.exports = logEvents
