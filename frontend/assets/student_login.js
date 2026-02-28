// student_login.js
const API_BASE = "http://localhost:5000/api/student";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnLogin");
  if (btn) btn.addEventListener("click", login);
  const btnReset = document.getElementById("btnReset");
  if (btnReset) btnReset.addEventListener("click", resetPassword);
});

async function login(){
  const usn = document.getElementById("loginUSN").value.trim();
  const password = document.getElementById("loginPASS").value.trim();
  if (!usn || !password) return alert("Enter USN and password");

  try {
    const res = await fetch(`${API_BASE}/login`, {
      method:"POST", headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ usn, password })
    });
    const data = await res.json();
    if (!data.success) {
      alert(data.message || "Login failed");
      return;
    }
    // save minimal info
    localStorage.setItem("usn", data.student.usn);
    localStorage.setItem("dept", data.student.department || "");
    localStorage.setItem("counsellor", data.student.counsellorUsername || "");
    // optional store name as usn
    localStorage.setItem("name", data.student.usn);
    location.href = "student_dashboard.html";
  } catch (err) {
    console.error(err); alert("Server error");
  }
}

async function resetPassword(){
  const usn = document.getElementById("fpUsn").value.trim();
  const birthYear = document.getElementById("fpYear").value.trim();
  const hometown = document.getElementById("fpTown").value.trim();
  const newPassword = document.getElementById("fpNew").value.trim();
  if (!usn || !birthYear || !hometown || !newPassword) return alert("Fill all fields");
  try {
    const res = await fetch(`${API_BASE}/forgot-password`, {
      method:"POST", headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ usn, birthYear, hometown, newPassword })
    });
    const data = await res.json();
    if (data.success) { alert("Password reset. Login now."); location.reload(); }
    else alert(data.message || "Reset failed");
  } catch (err) { console.error(err); alert("Server error"); }
}