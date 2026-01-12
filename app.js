let all=[];
fetch("data/games.json").then(r=>r.json()).then(g=>{
 all=g; render(g);
});
function render(g){
 games.innerHTML="";
 g.forEach(o=>{
  games.innerHTML+=`<a class="card" href="game.html?id=${o.id}">
  <img src="${o.thumb}"><h3>${o.name}</h3></a>`;
 });
}
search.oninput=e=>{
 const q=e.target.value.toLowerCase();
 render(all.filter(x=>x.name.toLowerCase().includes(q)));
};