// ------------------------------------------------------
// COUNSELLOR DASHBOARD JS (FIXED & FULLY WORKING)
// ------------------------------------------------------

const API_COUNS = "http://localhost:5000/api/counsellor";

const counsellorUser = localStorage.getItem("counsellorUsername");
const counsellorName = localStorage.getItem("counsellorName");
const counsellorDept = localStorage.getItem("counsellorDept");

// Protect page
if (!counsellorUser) {
    alert("Please login first.");
    location.href = "counsellor_login.html";
}

document.getElementById("cTitle").innerText = `Welcome, ${counsellorName || counsellorUser}`;
document.getElementById("cDept").innerText = counsellorDept ? `Dept: ${counsellorDept}` : "";

let selectedConcernId = null;

// ------------------------------------------------------
// LOAD CONCERNS
// ------------------------------------------------------

async function loadConcerns() {
    try {
        const res = await fetch(`${API_COUNS}/concerns/${counsellorUser}`);
        const data = await res.json();
        const list = data.list || [];

        const box = document.getElementById("concernList");
        box.innerHTML = "";

        if (!list.length) {
            box.innerHTML = `<p class="small muted">No concerns assigned.</p>`;
            return;
        }

        list.forEach(c => {
            box.innerHTML += `
                <div class="concern-item" 
                    onclick="openReply('${c._id}', '${c.usn}', \`${c.message || ""}\`, \`${c.aiReply || ""}\`, \`${c.reply || ""}\`)">
                    
                    <p><b>${c.usn}</b></p>
                    <p class="small muted">${(c.message || "").slice(0, 100)}</p>
                    <p class="small">${c.reply ? "Replied" : "Pending"}</p>
                </div>
            `;
        });

    } catch (err) {
        console.error(err);
        alert("Error loading concerns");
    }
}

loadConcerns();

// ------------------------------------------------------
// OPEN REPLY BOX
// (THIS WORKS NOW)
// ------------------------------------------------------

window.openReply = function(id, usn, message, ai, prevReply) {
    selectedConcernId = id;

    document.getElementById("replyUsn").innerText = usn;
    document.getElementById("replyConcernText").innerText = message;
    document.getElementById("replyAIText").innerText = ai;
    document.getElementById("replyText").value = prevReply || "";

    document.getElementById("replyBox").style.display = "block";
};

// ------------------------------------------------------
// SEND REPLY (WORKING)
// ------------------------------------------------------

document.getElementById("sendReplyBtn").addEventListener("click", async () => {

    const reply = document.getElementById("replyText").value.trim();
    if (!selectedConcernId) return alert("Please select a concern first.");
    if (!reply) return alert("Please type your reply.");

    try {
        const res = await fetch(`${API_COUNS}/reply`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ concernId: selectedConcernId, reply })
        });

        const data = await res.json();

        if (data.success) {
            alert("Reply sent successfully!");
            document.getElementById("replyBox").style.display = "none";
            loadConcerns();
        } else {
            alert(data.message || "Reply failed");
        }

    } catch (err) {
        console.error(err);
        alert("Error sending reply.");
    }
});

// ------------------------------------------------------
// LOGOUT
// ------------------------------------------------------

function logoutCounsellor() {
    localStorage.clear();
    location.href = "index.html";
}