import express from "express";
import bcrypt from "bcrypt";
import Counsellor from "../models/Counsellor.js";
import Concern from "../models/Concern.js";

const router = express.Router();

// Counsellor login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Counsellor.findOne({ username });
    if (!user) return res.status(404).json({ success: false, message: "Counsellor not found" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ success: false, message: "Incorrect password" });

    res.json({ success: true, counsellor: user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Login error" });
  }
});

// Get concerns assigned to counsellor
router.get("/concerns/:username", async (req, res) => {
  try {
    const list = await Concern.find({ counsellor: req.params.username }).sort({ createdAt: -1 });
    res.json({ success: true, list });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to load concerns" });
  }
});

// Send reply to a concern
router.post("/reply", async (req, res) => {
  try {
    const { concernId, reply } = req.body;
    if (!concernId || !reply) return res.status(400).json({ success: false, message: "Missing fields" });

    const c = await Concern.findById(concernId);
    if (!c) return res.status(404).json({ success: false, message: "Concern not found" });

    c.reply = reply;
    await c.save();
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error sending reply" });
  }
});

export default router;