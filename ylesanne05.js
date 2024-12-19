// toomas
// 29.10.2024
// 5


let temp = [14,23,65];

for (const i of temp) {
    console.log(i>=25 ? `${i}°C Väga kuum ilm!` : (i>=15 ? `${i}°C Mõnus temperatuur!` : `${i}°C Jahe ilm. `))
};

let kasutaja = ["mario", "admin"]

for (const i of kasutaja) {
    console.log(`${i == "admin" ? "Tere, administraator!" : "Tere, külaline!"}`);
};

let pilet = "sooduspilet";
let vanus = 22;

if (pilet == "taispilet") {
    if (vanus >= 65) {
        console.log("Pileti hind on 15€");
    } else if (vanus >= 18) {
        console.log("Pileti hind on 20€");
    } else {
        console.log("Pileti hind on 10€");
    } 
}   else {
    if (vanus >= 65 || vanus <=18) {
        console.log("Pileti hind on 8€");
    } else {
        console.log("Pileti hind on 15€");
    }
};
