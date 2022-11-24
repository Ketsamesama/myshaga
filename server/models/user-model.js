const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  city: { type: String, required: true },
  dormitory: { type: String, required: true },
  room: { type: String },
  avatar: { type: String, default: null },
  university: { type: String, default: null },
});

module.exports = model('User', UserSchema);
