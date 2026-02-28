import express from "express";
import bcrypt from "bcrypt";
import Student from "../models/Student.js";
import Counsellor from "../models/Counsellor.js";
import Concern from "../models/Concern.js";
import  getAIReply  from "../ai_engine.js";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { usn, department, counsellorUsername, birthYear, hometown, password } = req.body;
    if (!usn || !department || !password) return res.status(400).json({ success: false, message: "Missing fields" });

    const exists = await Student.findOne({ usn });
    if (exists) return res.status(400).json({ success: false, message: "USN already registered" });

    const hash = await bcrypt.hash(password, 10);
    const student = await Student.create({ usn, department, counsellorUsername: counsellorUsername || "", birthYear, hometown, password: hash });
    res.json({ success: true, student });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Registration failed" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { usn, password } = req.body;
    const user = await Student.findOne({ usn });
    if (!user) return res.status(404).json({ success: false, message: "Student not found" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ success: false, message: "Incorrect password" });

    res.json({ success: true, student: user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Login failed" });
  }
});

// Get counsellors by department
router.get("/getCounsellors/:dept", async (req, res) => {
  try {
    const dept = req.params.dept;
    const list = await Counsellor.find({ department: dept });
    res.json({ success: true, counsellors: list });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to fetch counsellors" });
  }
});

// Submit concern (auto AI reply)
router.post("/submit-concern", async (req, res) => {
  try {
    const { usn, message } = req.body;
    if (!usn || !message) return res.status(400).json({ success: false, message: "Missing fields" });

    const student = await Student.findOne({ usn });
    if (!student) return res.status(404).json({ success: false, message: "Student not found" });

    const aiReply = getAIReply(message);

    const concern = await Concern.create({
      usn,
      counsellor: student.counsellorUsername || "",
      message,
      aiReply
    });

    res.json({ success: true, concern, aiReply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error submitting concern" });
  }
});

// Get student's concerns
router.get("/concerns/:usn", async (req, res) => {
  try {
    const list = await Concern.find({ usn: req.params.usn }).sort({ createdAt: -1 });
    res.json({ success: true, list });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to fetch concerns" });
  }
});

// Forgot password
router.post("/forgot-password", async (req, res) => {
  try {
    const { usn, birthYear, hometown, newPassword } = req.body;
    const user = await Student.findOne({ usn });
    if (!user) return res.status(404).json({ success: false, message: "USN not registered" });

    if (String(user.birthYear) !== String(birthYear) || String(user.hometown).toLowerCase() !== String(hometown).toLowerCase()) {
      return res.status(401).json({ success: false, message: "Details do not match" });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    res.json({ success: true, message: "Password updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Password reset failed" });
  }
});

export default router;