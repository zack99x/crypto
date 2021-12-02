var express = require('express')
var router = express.Router()

var User = require('../models/user.js')
var Auth = require('../services/auth.js')

router.post('/login', async function (req, res) {
    if (!req.body) {
      return res.status(400).json({
        status: 400,
        message: "Request error",
      })
    } else if (!req.body.username) {
      return res.status(400).json({
        status: 400,
        message: "Missing username",
      })
    } else if (!req.body.password) {
      return res.status(400).json({
        status: 400,
        message: "Missing password",
      })
    }

    User.find({'username': req.body.username}, function (err, doc) {
      if (err && err.name === 'CastError')
        return res.status(400).json({
          status: 400,
          message: 'No user with this username.',
        })
      else if (err)
        return res.status(400).json({
          status: 400,
          message: err.message,
        })

      if (doc.length === 0)
        return res.status(400).json({
          status: 400,
          message: 'No user with this username.',
        })
      else {
        if (Auth.verifyPassword(req.body.password, doc[0].hash, doc[0].salt)) {
          return res.status(200).json({
            status: 200,
            message: 'Login successful.',
            data: Auth.AuthJSON(doc[0].username, doc[0].email, doc[0]._id),
          })
        } else {
          return res.status(400).json({
            status: 400,
            message: "Wrong password.",
          })
        }
      }
    })
})

router.post('/logout', async function (req, res) {
  return res.status(200).json({
    status: 200,
    message: 'Logout successful.',
  })
})

module.exports = router