// toomas
// 29.11.2024
// 9


//Erinevad funktsioonid
var nimi = function() {
  console.log("toomas");
};

nimi();
const nimi1 = () => {
  console.log("toomas nool")
};

nimi1();


//Argumendiga funktsioon
const kuupaev = () => {
  let date = new Date().toLocaleDateString("ee-EE");
  console.log(date);

};

kuupaev();

//Teadmata hulk
let nr = [1,25,5,7,2,5];

const number = () => {
  let kokku = 0;
  nr.forEach(element => kokku+=element);
  console.log(`Kokku: ${kokku}`);
  console.log(`Keskmine: ${kokku/nr.length}`);

};

number();

//Salajane sõnum
let sonum = ("Paabel");

const salasonum = () => {
  console.log(sonum.replace(/[aeiou]/gi, '*'));
};

salasonum();

//Unikaalsed nimed
let nimed = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"]

const leianimed = () => {
  let uniknim = nimed.filter(function(value, index, array) {
    return array.indexOf(value) === index;
  });
  console.log(uniknim)
};

leianimed();