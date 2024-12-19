// toomas
// 28.11.2024
// 8

let myndid = [];
const raha = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];
let i = 0;

while (i < raha.length) {
  if (raha[i] <= 2) {
    myndid.push(raha[i]);
  }
  i++;
}

const sum = myndid.reduce((b, a) => b + a, 0);
console.log(`Raha kokku ${sum}€`);
console.log(`Münte kokku ${myndid.length}`);


