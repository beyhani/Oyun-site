const c="oyunsite";
self.addEventListener("install",e=>{
e.waitUntil(caches.open(c).then(x=>x.addAll([
"/Oyunsite/","/Oyunsite/index.html","/Oyunsite/style.css"
])));
});