let scores=JSON.parse(localStorage.getItem("lb"))||[];
function saveScore(s){
scores.push(s);
scores=scores.sort((a,b)=>b-a).slice(0,5);
localStorage.setItem("lb",JSON.stringify(scores));
render();
}
function render(){
const ul=document.getElementById("leaderboard");
ul.innerHTML="";
scores.forEach(s=>{
const li=document.createElement("li");
li.textContent="Skor: "+s;
ul.appendChild(li);
});
}
render();