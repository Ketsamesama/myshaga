const { Schema, model } = require('mongoose');

const UserResault = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  result: { type: Number, required: true },
});

const ApplicationSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },

  title: { type: String, required: true },
  numberSignatures: { type: Number, required: true },
  votedUsers: { type: [UserResault] },
});

module.exports = model('applications', ApplicationSchema);
