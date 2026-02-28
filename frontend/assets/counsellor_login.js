// counsellor_login.js
const API_COUNS = "http://localhost:5000/api/counsellor";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnCounsellorLogin");
  if (btn) btn.addEventListener("click", loginCounsellor);
});

async function loginCounsellor(){
  const username = document.getElementById("cname").value.trim();
  const password = document.getElementById("cpass").value.trim();
  if (!username || !password) return alert("Enter username and password");
  try {
    const res = await fetch(`${API_COUNS}/login`, {
      method:"POST", headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (!data.success) return alert(data.message || "Login failed");
    localStorage.setItem("counsellorUsername", data.counsellor.username);
    localStorage.setItem("counsellorName", data.counsellor.name);
    localStorage.setItem("counsellorDept", data.counsellor.department);
    location.href = "counsellor_dashboard.html";
  } catch (err) { console.error(err); alert("Server error"); }
}