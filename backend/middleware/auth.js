var jwt = require('jsonwebtoken')
var env = require('../config/index.js')

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers
  const token = authorization && authorization.split(" ")[1]

  if (token == null)
    return res.status(401).json({
      status: 401,
      message: 'Unauthorized.'
    })
    jwt.verify(token, env.secret, (err, user) => {
    if (err)
      return res.status(403).json({
        status: 403,
        message: 'Invalid token.'
      })
    req.user = user
    next()
  })
}

module.exports = authMiddleware