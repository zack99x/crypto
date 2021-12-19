/**
 * Required External Modules
 */

const express = require("express")
const path = require("path")
var cors = require("cors")
var bodyParser = require("body-parser")
const swaggerDoc = require("./config/swaggerConfig")
const mongoDB = require("./config/mongoDBConfig")
const cookieParser = require("cookie-parser")

/**
 * App Variables
 */

const app = express()
const port = process.env.PORT || "8000"

/**
 *  App Configuration
 */

app.use(cors())
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "*")
  res.setHeader("Access-Control-Allow-Headers", "*")
  res.setHeader("Access-Control-Allow-Credentials", true)
  res.setHeader("Access-Control-Expose-Headers", "JWT, Uid")
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieParser())

/**
 * Routes Definitions
 */
var user = require("./routes/user.js")
var cryptocompare = require("./routes/cryptocompare.js")
var auth = require("./routes/auth.js")
var github = require("./routes/github.js")

app.use("/", auth)
app.use("/users", user)
app.use("/cryptos", cryptocompare)
app.use("/github", github)

/**
 * Server Activation
 */

swaggerDoc(app)

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`)
})
