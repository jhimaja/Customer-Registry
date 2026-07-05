const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./database/connection");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("Customer Registry Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth",authRoutes);