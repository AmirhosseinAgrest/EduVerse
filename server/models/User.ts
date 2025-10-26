const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  role: { type: String },
  country: { type: String },
  underserved: { type: Boolean, default: false },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
});

// جلوگیری از خطای "Cannot overwrite model once compiled"
module.exports = mongoose.models.User || mongoose.model("User", userSchema);