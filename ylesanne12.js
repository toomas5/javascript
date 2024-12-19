// toomas
// 11.12.2024
// 12

const ostukorv = [
    { nimi: "Õun", hind: 1.5, kogus: 3 },
    { nimi: "Banaan", hind: 2.0, kogus: 2 },
    { nimi: "Piim", hind: 1.8, kogus: 1 },
    { nimi: "Leib", hind: 1.2, kogus: 1 }
];

const h1 = document.createElement('h1');
h1.textContent = 'Ostukorv';
document.body.appendChild(h1);

const ostukorvList = document.createElement('ul');
ostukorvList.id = 'ostukorv';
document.body.appendChild(ostukorvList);

const summaE = document.createElement('p');
summaE.id = 'summa';
document.body.appendChild(summaE);

function lisaKorvi(toode) {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = `${toode.nimi} - Hind: €${toode.hind.toFixed(2)} - Kogus: ${toode.kogus}`;
    ostukorvList.appendChild(li);
}

function arvutasumma() {
    let summa = 0;
    ostukorv.forEach(toode => {
        summa += toode.hind * toode.kogus;
    });
    summaE.textContent = `Summa: €${summa.toFixed(2)}`;
}

ostukorv.forEach(toode => {
    lisaKorvi(toode);
});
arvutasumma();
