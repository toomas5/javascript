// toomas
// 23.10.2024
// 2

const tund = 5;
const min = 26;
const sec = 47;

console.log (tund+":"+min+":"+sec+"PM")

const tsitaat = "Luua kolm muutujat: tunnid, minutid, sekundid. Ühenda muutujad kokku, lisades nende vahele kooloni (:) ja lõppu tähed PM.";
console.log ('Mario Metshein - "'+tsitaat+'"');

var nimi = "Perenimi, Eesnimi";
console.log(nimi.split(",")[0]);
console.log((nimi.split(",")[0]).toUpperCase());
console.log((nimi.split(",")[0]).length);

var mail = "karrolk@netlog.com";
console.log(mail.replace('netlog', 'gmail'))

var rida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175"
console.log('"'+(rida.split(',')[5])+'" ja "'+((rida.split(',')[3])).split('@')[0]+'"');
