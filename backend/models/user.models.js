const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  isVerified: { type: Boolean, default: false },
  otp: { type: String },
  addresses: [
    {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String
    }
  ],
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);