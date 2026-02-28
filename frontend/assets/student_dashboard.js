// student_dashboard.js
const API = "http://localhost:5000/api/student";

const studentUSN = localStorage.getItem("usn");
const studentDept = localStorage.getItem("dept") || "";
const counsellorUsername = localStorage.getItem("counsellor") || "";

if (!studentUSN) { alert("Please login first."); location.href = "student_login.html"; }

document.getElementById("studentName").innerText = studentUSN;
document.getElementById("studentDept").innerText = studentDept;

async function loadConcerns(){
  try {
    const res = await fetch(`${API}/concerns/${studentUSN}`);
    const data = await res.json();
    const list = Array.isArray(data) ? data : (data.list || []);
    const box = document.getElementById("concernBox");
    box.innerHTML = "";
    if (!list || list.length === 0) {
      box.innerHTML = `<div class="big-card"><p class="empty-msg">No concerns submitted yet.</p></div>`;
      return;
    }
    list.forEach(c => {
      box.innerHTML += `
        <div class="big-card">
          <p><b>Your Concern:</b> ${escapeHtml(c.message)}</p>
          ${c.aiReply ? `<div class="ai-box">${escapeHtml(c.aiReply)}</div>` : ""}
          <p><b>Counsellor Reply:</b> ${c.reply ? `<span class="reply">${escapeHtml(c.reply)}</span>` : `<span class="no-reply">Not replied yet</span>`}</p>
          <p class="time">${fmtDate(c.createdAt)}</p>
        </div>
      `;
    });
  } catch (err) { console.error(err); alert("Could not load concerns."); }
}
loadConcerns();

document.getElementById("btnSend").addEventListener("click", async () => {
  const text = document.getElementById("concernInput").value.trim();
  if (!text) return alert("Please type your concern.");
  try {
    const res = await fetch(`${API}/submit-concern`, {
      method:"POST", headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ usn: studentUSN, message: text })
    });
    const data = await res.json();
    if (data.success) { document.getElementById("concernInput").value = ""; loadConcerns(); }
    else alert(data.message || "Submit failed");
  } catch (err) { console.error(err); alert("Server error"); }
});

document.getElementById("logoutBtn").addEventListener("click", () => { localStorage.clear(); location.href = "index.html"; });

function escapeHtml(s){ if(!s) return ""; return s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"); }