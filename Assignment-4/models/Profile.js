const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  //userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profile: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  height: { type: Number, required: true },
  status: { type: String, required: true },
  language: { type: String, required: true },
  religion: { type: String, required: true },
  occupation: { type: String, required: true },
  pinCode: { type: String, required: true },
  age: { type: Number, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  note: { type: String }
});

module.exports = mongoose.model('Profile', ProfileSchema);
