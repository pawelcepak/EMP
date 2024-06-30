// WIADOMOSCI
// tydzien
const tydzienNormalneWiadomosci = poniedzialek2 + wtorek2 + dzienNormalneWiadomosci;
const tydzienDarmoweWiadomosci = 1 + 1 + dzienDarmoweWiadomosci;
const tydzienWeekendoweWiadomosci = dzienWeekendoweWiadomosci;

// EUROCENTY
// specjalne
const weekendowe = 0.01;
const darmowe = 0.05;
// stawki
const stawka1 = 0.08; // 0 - 775
const stawka2 = 0.09; // 776 - 1575
const stawka3 = 0.10; // 1576 - 1975
const stawka4 = 0.11; // 1976+
// progi
const prog1 = 775;
const prog2 = 1576;
const prog3 = 1975;
const prog4 = 1976;
// braki do progow
const brakProg1 = tydzienNormalneWiadomosci - prog1;
const brakProg2 = tydzienNormalneWiadomosci - prog2;
const brakProg3 = tydzienNormalneWiadomosci - prog3;

// ZAROBKI
// dzien
const dzienNormalneZarobek = dzienNormalneWiadomosci * stawka1;
const dzienDarmoweZarobek = dzienDarmoweWiadomosci * darmowe;
const dzienWeekendoweZarobek = dzienWeekendoweWiadomosci * weekendowe;
const sumaDzienZarobek = dzienNormalneZarobek + dzienDarmoweZarobek + dzienWeekendoweZarobek;
// tydzien
const tydzienNormalneZarobek = tydzienNormalneWiadomosci * stawka1;
const tydzienDarmoweZarobek = tydzienDarmoweWiadomosci * darmowe;
const tydzienWeekendoweZarobek = tydzienWeekendoweWiadomosci * weekendowe;
const sumaTydzienZarobek = tydzienNormalneZarobek + tydzienDarmoweZarobek + tydzienWeekendoweZarobek;


// _____________________________________
const przelicznikEuroToPln = 4.11;
const procentSTS = 0.2;

const razemEuro = sumaTydzienZarobek - 5;
const razemZloty = sumaTydzienZarobek * przelicznikEuroToPln;