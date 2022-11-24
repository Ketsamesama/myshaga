const { Schema, model } = require('mongoose');

const ApplicationSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },

  title: { type: String, required: true },
  numberSignatures: { type: Number, required: true },
});

module.exports = model('applications', ApplicationSchema);
