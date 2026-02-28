import express from "express";
import  getAIReply from "../ai_engine.js";  // ✅ named import

const router = express.Router();

// AI reply route
router.post("/reply", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ success: false, message: "Message required" });
    }

    // getAIReply is synchronous, but wrapping in async is safe
    const reply = getAIReply(message);

    res.json({ success: true, reply });
  } catch (err) {
    console.error("AI route error:", err);
    res.status(500).json({ success: false, message: "AI error" });
  }
});

export default router;