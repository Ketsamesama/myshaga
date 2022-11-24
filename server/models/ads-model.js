const { Schema, model } = require('mongoose');

const AdsSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  images: { type: Array, required: true },
  email: { type: String },
  phone_number: { type: String },
  dataCreated: { type: String, required: true },
});

module.exports = model('Ads', AdsSchema);
