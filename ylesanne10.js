// toomas
// 06.12.2024
// 10

const ostukorv = {
  tooted: [
    { nimi: 'Piim', hind: 3.60, kogus: 2 },
    { nimi: 'Leib', hind: 2.00, kogus: 1 },
    { nimi: 'Munad', hind: 1.50, kogus: 6 },
    { nimi: 'Juust', hind: 4.20, kogus: 1 },
    { nimi: 'Tomatid', hind: 2.30, kogus: 3 }
  ],

  kuvasisu: function() {
    this.tooted.forEach(toode => {console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);});
  },

  lisa: function() {
    this.tooted.push({ nimi: 'Rosinad', hind: 3.30, kogus: 2 });
  },

  summa: function() {
    let summa = 0;
    this.tooted.forEach(toode => {summa += toode.hind * toode.kogus;});
    console.log(`Ostukorvi kogu summa: ${summa}€`)
}
}


ostukorv.lisa();
ostukorv.kuvasisu();
ostukorv.summa();