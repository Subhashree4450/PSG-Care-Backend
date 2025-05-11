const express = require("express");
const router = express.Router();
const { createFormEntry } = require("../controllers/formController");

router.post("/", createFormEntry);

module.exports = router;
