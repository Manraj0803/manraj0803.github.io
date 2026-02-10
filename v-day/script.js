// ---------- Hearts (Sahil-style vibe) ----------
function startHearts(count = 18) {
  const container = document.getElementById("hearts");
  if (!container) return;

  // Avoid stacking too many hearts if called twice
  container.innerHTML = "";

  for (let i = 0; i < count; i++) {
    spawnHeart(container, true);
  }

  // Keep spawning occasionally
  setInterval(() => spawnHeart(container, false), 700);
}

function spawnHeart(container, initial) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = pick(["❤️", "💖", "💗", "💘", "💕"]);

  const left = Math.random() * 100;
  const drift = (Math.random() * 120 - 60).toFixed(0) + "px";
  const duration = (Math.random() * 3 + 4.5).toFixed(2) + "s";
  const delay = initial ? (Math.random() * 1.2).toFixed(2) + "s" : "0s";
  const size = (Math.random() * 10 + 14).toFixed(0) + "px";

  heart.style.left = left + "vw";
  heart.style.setProperty("--drift", drift);
  heart.style.animationDuration = duration;
  heart.style.animationDelay = delay;
  heart.style.fontSize = size;

  container.appendChild(heart);

  // Remove after animation
  const totalMs = (parseFloat(duration) + parseFloat(delay)) * 1000;
  setTimeout(() => heart.remove(), totalMs + 200);
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Auto start hearts on every page that has #hearts
startHearts(18);

// ---------- Runaway NO button ----------
function moveNo() {
  const btn = document.getElementById("no");
  if (!btn) return;

  // Keep it inside safe area
  const padding = 16;
  const btnRect = btn.getBoundingClientRect();

  const maxX = window.innerWidth - btnRect.width - padding;
  const maxY = window.innerHeight - btnRect.height - padding;

  const x = Math.max(padding, Math.random() * maxX);
  const y = Math.max(padding, Math.random() * maxY);

  // Smooth move
  btn.style.transition = "left 140ms ease, top 140ms ease, transform 140ms ease";
  btn.style.left = x + "px";
  btn.style.top = y + "px";
  btn.style.transform = "translate(0,0)";
}

// ---------- YES navigation (with tiny delay for feel) ----------
function goYes() {
  const yesBtn = document.getElementById("yes");
  if (yesBtn) {
    yesBtn.style.transform = "scale(1.03)";
  }
  setTimeout(() => {
    window.location.href = "yes.html";
  }, 160);
}