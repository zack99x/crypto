var mongoose = require('mongoose')

var mongoDB = 'mongodb+srv://Admin:AdminTest00@cluster0.murir.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error)
      console.log("MongoDB connection error: " + error)
    else
      console.log("MongoDB connection successful")
  }
)

module.exports = mongoDB