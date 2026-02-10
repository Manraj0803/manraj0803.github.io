function moveNo() {
  const noBtn = document.getElementById("no");
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

function goYes() {
  window.location.href = "yes.html";
}
