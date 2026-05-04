import express from "express";

const router = express.Router();

// test endpoint
router.get("/", (req, res) => {
  res.json({ message: "Test route working 🚀" });
});

export default router;