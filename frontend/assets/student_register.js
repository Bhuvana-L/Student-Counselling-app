// ------------------------------------------------------
// STUDENT REGISTER JS
// ------------------------------------------------------

const API_URL = "http://localhost:5000/api/student";

// -------------------------------
// AUTO LOAD COUNSELLORS BY DEPT
// -------------------------------

document.getElementById("regDept").addEventListener("change", async () => {
    const dept = document.getElementById("regDept").value;
    const selectBox = document.getElementById("regCounsellor");

    selectBox.innerHTML = `<option>Loading...</option>`;

    if (!dept) {
        selectBox.innerHTML = `<option value="">Select department first</option>`;
        return;
    }

    try {
        const res = await fetch(`${API_URL}/getCounsellors/${dept}`);
        const data = await res.json();

        if (!data.success || data.counsellors.length === 0) {
            selectBox.innerHTML = `<option value="">No counsellors found</option>`;
            return;
        }

        // Show counsellors
        selectBox.innerHTML = `<option value="">Select Counsellor</option>`;
        data.counsellors.forEach(c => {
            selectBox.innerHTML += `
                <option value="${c.username}">${c.name} (${c.username})</option>
            `;
        });

    } catch (err) {
        console.log(err);
        selectBox.innerHTML = `<option value="">Error loading</option>`;
    }
});

// ------------------------------------------------------
// REGISTER STUDENT
// ------------------------------------------------------

document.getElementById("btnRegister").onclick = async () => {
    const usn = document.getElementById("regUSN").value.trim();
    const dept = document.getElementById("regDept").value.trim();
    const counsellor = document.getElementById("regCounsellor").value.trim();
    const birth = document.getElementById("regBirth").value.trim();
    const hometown = document.getElementById("regHome").value.trim();
    const password = document.getElementById("regPass").value.trim();

    if (!usn || !dept || !counsellor || !birth || !hometown || !password) {
        alert("Please fill all fields.");
        return;
    }

    try {
        const res = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                usn,
                department: dept,
                counsellorUsername: counsellor,
                birthYear: birth,
                hometown,
                password
            })
        });

        const data = await res.json();

        if (data.success) {
            alert("Registration successful!");
            location.href = "student_login.html";
        } else {
            alert(data.message || "Registration failed.");
        }

    } catch (err) {
        console.log(err);
        alert("Server error while registering.");
    }
};