import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import Counsellor from "./models/Counsellor.js";
import Student from "./models/Student.js";

dotenv.config();

async function seed() {
  if (!process.env.MONGO_URL) {
    console.error("❌ MONGO_URL missing in .env");
    process.exit(1);
  }

  // ✅ No extra options needed in Mongoose v6+
  await mongoose.connect(process.env.MONGO_URL);

  console.log("Connected to MongoDB for seeding...");

  await Counsellor.deleteMany({});
  await Student.deleteMany({});

  const counsellors = [
    { username: "cse_kavitha", name: "Dr. Kavitha", department: "CSE", password: await bcrypt.hash("CSEkavitha123", 10) },
    { username: "cse_pradeep", name: "Prof. Pradeep", department: "CSE", password: await bcrypt.hash("CSEpradeep123", 10) },
    { username: "cse_sindhu", name: "Mrs. Sindhu", department: "CSE", password: await bcrypt.hash("CSEsindhu123", 10) },
    { username: "ise_manoj", name: "Prof. Manoj", department: "ISE", password: await bcrypt.hash("ISemanoj123", 10) },
    { username: "ise_geetha", name: "Dr. Geetha", department: "ISE", password: await bcrypt.hash("ISEgeetha123", 10) },
    { username: "ise_chitra", name: "Mrs. Chitra", department: "ISE", password: await bcrypt.hash("ISEchitra123", 10) },
    { username: "ece_shilpa", name: "Dr. Shilpa", department: "ECE", password: await bcrypt.hash("ECEshilpa123", 10) },
    { username: "ece_arun", name: "Prof. Arun", department: "ECE", password: await bcrypt.hash("ECEarun123", 10) },
    { username: "ece_asha", name: "Mrs. Asha", department: "ECE", password: await bcrypt.hash("ECEasha123", 10) },
    { username: "eee_priya", name: "Ms. Priya", department: "EEE", password: await bcrypt.hash("EEEpriya123", 10) },
    { username: "eee_john", name: "Prof. John", department: "EEE", password: await bcrypt.hash("EEEjohn123", 10) },
    { username: "eee_suresh", name: "Dr. Suresh", department: "EEE", password: await bcrypt.hash("EEEsuresh123", 10) },
    { username: "mech_ravi", name: "Prof. Ravi", department: "MECH", password: await bcrypt.hash("MECHravi123", 10) },
    { username: "mech_kumar", name: "Dr. Kumar", department: "MECH", password: await bcrypt.hash("MECHkumar123", 10) },
    { username: "mech_pooja", name: "Mrs. Pooja", department: "MECH", password: await bcrypt.hash("MECHpooja123", 10) },
    { username: "civil_prakash", name: "Prof. Prakash", department: "CIVIL", password: await bcrypt.hash("CIVILprakash123", 10) },
    { username: "civil_suma", name: "Dr. Suma", department: "CIVIL", password: await bcrypt.hash("CIVILsuma123", 10) },
    { username: "civil_raj", name: "Mr. Raj", department: "CIVIL", password: await bcrypt.hash("CIVILraj123", 10) }
  ];

  await Counsellor.insertMany(counsellors);

  // ⭐ Sample Test Student
  await Student.create({
    usn: "4GW24IS001",
    department: "ISE",
    counsellorUsername: "ise_manoj",
    birthYear: "2004",
    hometown: "Mysuru",
    password: await bcrypt.hash("student123", 10)
  });

  console.log("🌱 Seed completed: 18 counsellors + 1 student created.");
  await mongoose.connection.close();
}

seed().catch(err => {
  console.error("Seed error:", err);
  process.exit(1);
});