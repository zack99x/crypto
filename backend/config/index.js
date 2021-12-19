require('dotenv').config()

const secret = process.env.SECRET
const clientID = process.env.CLIENTID
const clientSecret = process.env.CLIENTSECRET
const cryptoAPIkey = process.env.CRYPTOAPIKEY

module.exports = {
  secret: secret,
  clientID: clientID,
  cryptoAPIkey: cryptoAPIkey,
}