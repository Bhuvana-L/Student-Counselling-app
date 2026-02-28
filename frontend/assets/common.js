// common.js - theme toggle + helpers
const FRONTEND_API = "http://localhost:5000"; // change if backend runs elsewhere

document.addEventListener("DOMContentLoaded", () => {
  const t = document.getElementById("themeToggle");
  if (t) t.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", cur === "light" ? "dark" : "light");
    localStorage.setItem("mc_theme", cur === "light" ? "dark" : "light");
  });

  const saved = localStorage.getItem("mc_theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);

  // forgot link show/hide
  const sf = document.getElementById("showForgot");
  if (sf) sf.addEventListener("click", (e) => {
    e.preventDefault();
    const box = document.getElementById("forgotBox");
    if (box) box.style.display = box.style.display === "block" ? "none" : "block";
  });
});

// helper
function fmtDate(ts){ try{ return new Date(ts).toLocaleString() }catch{return ""} }