import express from "express";
import cors from "cors";
import dotenv from "dotenv";


import testRoutes from "./src/routes/test.routes.js";
import "./src/config/db.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/test", testRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("🚀 Engineer Cert System API Running...");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});