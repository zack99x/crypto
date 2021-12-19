var mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')
var crypto = require('crypto')

var UserSchema = new mongoose.Schema(
  {
    username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    role: {required: [true, "can't be blank"], type: String},
    hash: String,
    salt: String
  },
  {
    timestamps: true
  },
)

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'})

UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex')
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
}

var User = mongoose.model('User', UserSchema)

module.exports = User
