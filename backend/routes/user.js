var express = require('express')
const authMiddleware = require('../middleware/auth.js')
var router = express.Router()

var User = require('../models/user.js')
var Auth = require('../services/auth.js')
var AuthMiddleware = require('../middleware/auth.js')

// creates user
router.post('/', async function (req, res) {
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
  } else if (!req.body.email) {
    return res.status(400).json({
      status: 400,
      message: "Missing email",
    })
  } else if (!req.body.password) {
    return res.status(400).json({
      status: 400,
      message: "Missing password",
    })
  }

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    role: 'user',
  })

  user.setPassword(req.body.password)

  await user.save(function(err) {
    if (err) {
      return res.status(400).json({
        status: 400,
        message: err.errors.username ? 'Username is already taken.' : err.errors.email ? 'Email is already taken' : 'An error occured',
      })
    } else {
      return res.status(200).json({
        status: 200,
        message: 'User created',
        data: Auth.AuthJSON(user.username, user.email, user._id)
      })
    }
  })
})

// updates user
router.put('/:id', AuthMiddleware, async function (req, res) {
  var query = {'_id': req.params.id}

  User.findOneAndUpdate(query, req.body, {upsert: true}, function(err, doc) {
    if (err && err.name === 'CastError') {
      return res.status(400).json({
        status: 400,
        message: 'No user with this id.',
      })
    } else if (err) {
      return res.status(400).json({
        status: 400,
        message: err.message,
      })
    }
    return res.status(200).json({
        status: 200,
        message: 'Succesfully updated.',
    })
  })
})

// gets user
router.get('/:id', AuthMiddleware, async function (req, res) {
  var query = {'_id': req.params.id}

  User.find(query, req.body, {upsert: true}, function(err, doc) {
    if (err && err.name === 'CastError') {
      return res.status(400).json({
        status: 400,
        message: 'No user with this id.',
      })
    } else if (err) {
      return res.status(400).json({
        status: 400,
        message: err.message,
      })
    }
    return res.status(200).json({
        status: 200,
        message: 'User found.',
        data: doc
    })
  })
})

// deletes user
router.delete('/:id', AuthMiddleware, async function (req, res) {
  var query = {'_id': req.params.id}

  User.deleteOne(query, function (err) {
    if (err && err.name === 'CastError') {
      return res.status(400).json({
        status: 400,
        message: 'No user with this id.',
      })
    } else if (err) {
      return res.status(400).json({
        status: 400,
        message: err.message,
      })
    }
    return res.status(200).json({
      status: 200,
      message: 'Succesfully deleted.',
    })
  })
})

module.exports = router
