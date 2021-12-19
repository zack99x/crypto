var mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

var CryptoSchema = new mongoose.Schema(
  {
    id: {type: String, unique: true, required: [true, "can't be blank"], index: true},
    full_name: {type: String, unique: true, required: [true, "can't be blank"]},
    image_url: {type: String, unique: true, required: [true, "can't be blank"]},
  },
  {
    timestamps: true
  },
)

CryptoSchema.plugin(uniqueValidator, {message: 'is already taken.'})

var Crypto = mongoose.model('Crypto', CryptoSchema)

module.exports = Crypto
