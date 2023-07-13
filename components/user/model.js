const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    require: true
  }
})

const model = mongoose.model('User', UserSchema)
module.exports = model;