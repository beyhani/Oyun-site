let score = localStorage.getItem("score") || 0;
document.getElementById("score").innerText = score;

function oyna() {
  score++;
  localStorage.setItem("score", score);
  document.getElementById("score").innerText = score;
}