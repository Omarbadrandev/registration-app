// CORS Middle ware config
// Cross Origin Resource Sharing
const allowedOrigins = require("./allowedOrigins")

// helpful Documentation:
// https://min9nim.vercel.app/2018-10-30-nodejs-cors/
// https://expressjs.com/en/resources/middleware/cors.html
// https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/
// https://stackabuse.com/handling-cors-with-node-js/
// TODO: CORS-OPTIONS-Revision : Chapter 7 : Middleware
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error("not allowed by CORS"))
    }
  },
  optionsSuccessStatus: 200
}

module.exports = corsOptions
