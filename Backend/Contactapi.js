const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Phone: Number,
  subject: String,
  Message: String,
});
module.exports = mongoose.model('Contact', ContactSchema);
