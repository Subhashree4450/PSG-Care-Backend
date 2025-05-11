const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  department: { type: String, required: true },
  purpose: { type: String, required: true },
  inTime: { type: Date, required: true },
  outTime: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('FormEntry', formSchema);
