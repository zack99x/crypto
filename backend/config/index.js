require('dotenv').config()

const secret = process.env.SECRET
const clientID = process.env.CLIENTID
const clientSecret = process.env.CLIENTSECRET

module.exports = {
  secret: secret,
  clientID: clientID,
  clientSecret: clientSecret,
}