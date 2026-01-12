const games=[];

function addGame(title,img,embed,cat,trend=false){
  games.push({title,img,embed,cat,trend});
}

addGame(
 "Speed Car Oyna",
 "https://img.gamedistribution.com/rvvASMiM-512x384.jpg",
 "https://html5.gamedistribution.com/rvvASMiM/",
 "araba",
 true
);

addGame(
 "Action Hero Oyna",
 "https://img.gamedistribution.com/4807350-512x384.jpg",
 "https://html5.gamedistribution.com/4807350/",
 "aksiyon",
 false
);
addGame(
 "Yeni Oyun Oyna",
 "RESİM_LİNKİ",
 "OYUN_EMBED_LİNKİ",
 "aksiyon",
 true
);