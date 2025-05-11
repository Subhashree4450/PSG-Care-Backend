const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const formRoutes = require("./routes/formRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/form", formRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB connected");
  app.listen(5000, () => console.log("Server running on port 5000"));
})
.catch((err) => console.error("MongoDB connection error:", err));
