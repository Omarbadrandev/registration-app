const logEvents = require("./logEvents")

const EventEmitter = require("events")

class MyEmitter extends EventEmitter {}

//initialize object

const MyEmitterObject = new MyEmitter()

// add listener for the log event

// this how we listen for an Event

// we are calling also an anonymous function

MyEmitterObject.on("log", (msg) => logEvents(msg))

// here we need to emit the event to test this out

setTimeout(() => {

  // Emit event: An event emitter is a pattern that listens to a named event, fires a callback, then emits that event with a value.

  MyEmitterObject.emit("log", "log event emitted!")

}, 2000)
