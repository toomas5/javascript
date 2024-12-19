// toomas
// 31.10.2024
// 6


let nr = -12;
let tyyp;
 
 
switch (true) {
  case (nr > 0):
    tyyp = "Positiivne"; break;
  case (nr < 0):
    tyyp = "Negatiivne"; break;
  case (nr == 0):
    tyyp = "Null"; break;
  default:
    tyyp = "tundmatu";
}

console.log(`Sisestatud number on ${tyyp}`);

let arv = 5
switch (true) {
  case (arv <= 0):
    console.log("Pole kedagi."); break;
  case (arv <= 2):
    console.log("Valige laud kahele inimesele."); break;
  case (arv <= 4):
    console.log("Valige laud neljale inimesele."); break;
  case (arv <= 6):
    console.log("Valige laud kuuele inimesele."); break;
  default:
    console.log("Valige suur laud.");
}