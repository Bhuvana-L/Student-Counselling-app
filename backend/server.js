import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import studentRoutes from "./routes/student_routes.js";
import counsellorRoutes from "./routes/counsellor_routes.js";
import aiRoutes from "./routes/ai_routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ---------- ROUTES ----------
app.use("/api/student", studentRoutes);
app.use("/api/counsellor", counsellorRoutes);
app.use("/api/ai", aiRoutes);

// ---------- CONNECT MONGO ----------
mongoose
  .connect(process.env.MONGO_URL)   // ✅ no extra options needed in Mongoose v6+
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));