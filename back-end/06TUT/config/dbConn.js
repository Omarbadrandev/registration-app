const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      // https://mongodb.github.io/node-mongodb-native/3.3/reference/unified-topology/
      // The unified topology is the first step in a paradigm shift away 
      // from a concept of “connecting” to a MongoDB deployment using a connect method.
      useUnifiedTopology: true,
      // useNewUrlParser : The underlying MongoDB driver has deprecated their current connection string parser.
      // Because this is a major change, they added the useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser
      useNewUrlParser: true
    })
  } catch (error) {
    console.error(error)
  }
}

module.exports = connectDB
