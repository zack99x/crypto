var express = require('express')
var router = express.Router()
const axios = require('axios')

var env = require('../config/index.js')
const clientID = env.clientID
const clientSecret = env.clientSecret

var User = require('../models/user.js')
var Auth = require('../services/auth.js')

router.get('/', function (req, res) {
  // const scope = ['user:email']

  res.redirect(`http://localhost:8080/success`)
  // res.redirect(`https://github.com/login/oauth/autorize?client_id=${clientID}&scope=${scope}`)
})

router.get('/callback', function (req, res) {
  const requestToken = req.query.code

  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    headers: {
      accept: 'application/json'
    }
  }).then((response) => {
    access_token = response.data.access_token
    if (access_token) {
      axios({
        method: 'get',
        url: `https://api.github.com/user`,
        headers: {
          Authorization: 'token ' + access_token
        }
      }).then((response) => {
        const user = new User({
          username: response.data.login,
          email: response.data.email
        })
        user.save().then(() => {
          const authData = Auth.AuthJSON(user.username, user.email, user._id)
          res.redirect(`http://localhost:8080/success?username=${authData.username}&email=${authData.email}&token=${authData.token}`)
        })
      })
    }
  })
})

module.exports = router