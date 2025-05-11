const FormEntry = require("../models/formModel");

// POST /api/form
const createFormEntry = async (req, res) => {
  try {
    const newEntry = new FormEntry(req.body);
    await newEntry.save();
    res.status(201).json({ message: "Entry saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createFormEntry };
