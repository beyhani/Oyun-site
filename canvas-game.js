const c=document.getElementById("game"),x=c.getContext("2d");
let px=150,py=150,r=20,score=0;
function draw(){
x.clearRect(0,0,300,300);
x.beginPath();x.arc(px,py,r,0,Math.PI*2);
x.fillStyle="#38bdf8";x.fill();
}
c.onclick=e=>{
const b=c.getBoundingClientRect();
const mx=e.clientX-b.left,my=e.clientY-b.top;
if(Math.hypot(mx-px,my-py)<r){
score++;document.getElementById("score").innerText=score;
saveScore(score);
px=Math.random()*260+20;py=Math.random()*260+20;
draw();
}};
draw();