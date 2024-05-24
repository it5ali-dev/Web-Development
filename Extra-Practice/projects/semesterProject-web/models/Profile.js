const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  firstName: String,
  lastName: String,
  age: Number,
  occupation: String,
  religion: String,
  lookingFor: String,
  phoneNumber: String,
  address: String,
  note: String,
});
module.exports = mongoose.model('Profile', ProfileSchema);
