// ____________________1____________________

// WIADOMOSCI
// tydzien
document.getElementById("tp").innerHTML = tydzienNormalneWiadomosci;
document.getElementById("td").innerHTML = tydzienDarmoweWiadomosci;
document.getElementById("tw").innerHTML = tydzienWeekendoweWiadomosci;
// dzien
document.getElementById("dp").innerHTML = dzienNormalneWiadomosci;
document.getElementById("dd").innerHTML = dzienDarmoweWiadomosci;
document.getElementById("dw").innerHTML = dzienWeekendoweWiadomosci;

// ZAROBEK
// tydzien
document.getElementById("ptp").innerHTML = tydzienNormalneZarobek.toFixed(2) + "&euro;";
document.getElementById("ptd").innerHTML = tydzienDarmoweZarobek.toFixed(2) + "&euro;";
document.getElementById("ptw").innerHTML = tydzienWeekendoweZarobek.toFixed(2) + "&euro;";
// dzien
document.getElementById("pdp").innerHTML = dzienNormalneZarobek.toFixed(2) + "&euro;";
document.getElementById("pdd").innerHTML = dzienDarmoweZarobek.toFixed(2) + "&euro;";
document.getElementById("pdw").innerHTML = dzienWeekendoweZarobek.toFixed(2) + "&euro;";

// SUMY ZAROBEK
document.getElementById("lt").innerHTML = sumaTydzienZarobek.toFixed(2) + "&euro;";
document.getElementById("ld").innerHTML = sumaDzienZarobek.toFixed(2) + "&euro;";

// STS I PODSUMOWANIE ZAROBEK
document.getElementById("stsProcent").innerHTML = (razemZloty * procentSTS).toFixed(2) + "zł";
document.getElementById("razemEuro").innerHTML = razemEuro.toFixed(2) + "&euro;";
document.getElementById("razemZloty").innerHTML = razemZloty.toFixed(2) + "zł";

// progi
document.getElementById("prog1").innerHTML = prog1;
document.getElementById("prog2").innerHTML = prog2;
document.getElementById("prog3").innerHTML = prog3;
// stawki
document.getElementById("weekendowe").innerHTML = weekendowe.toFixed(2);
document.getElementById("darmowe").innerHTML = darmowe.toFixed(2);
document.getElementById("stawka1").innerHTML = stawka1.toFixed(2);
document.getElementById("stawka2").innerHTML = stawka2.toFixed(2);
document.getElementById("stawka3").innerHTML = stawka3.toFixed(2);
document.getElementById("stawka4").innerHTML = stawka4.toFixed(2);
// braki do progow
document.getElementById("brakProg1").innerHTML = brakProg1;
document.getElementById("brakProg2").innerHTML = brakProg2;
document.getElementById("brakProg3").innerHTML = brakProg3;

if (tydzienNormalneWiadomosci <= prog1) {
    document.getElementById("stawka1").style.backgroundColor = "green";
} else if (tydzienNormalneWiadomosci > prog1 && tydzienNormalneWiadomosci < prog2) {
    document.getElementById("stawka2").style.backgroundColor = "green";
} else if (tydzienNormalneWiadomosci > prog2 && tydzienNormalneWiadomosci < prog3) {
    document.getElementById("stawka3").style.backgroundColor = "green";
} else if (tydzienNormalneWiadomosci > prog4) {
    document.getElementById("stawka4").style.backgroundColor = "green";
}






// ____________________2____________________
// tydzień 1
const elements1 = [
    { id: "data1", value: data1 },
    { id: "poniedzialek1", value: poniedzialek1 },
    { id: "wtorek1", value: wtorek1 },
    { id: "sroda1", value: sroda1 },
    { id: "czwartek1", value: czwartek1 },
    { id: "piatek1", value: piatek1 },
    { id: "sobota1", value: sobota1 },
    { id: "niedziela1", value: niedziela1 },
    { id: "sumaTydzien1", value: sumaTydzien1 },
    { id: "sredniaTydzien1", value: sredniaTydzien1.toFixed(0) }
];

elements1.forEach(element => {
    document.getElementById(element.id).innerHTML = element.value;
});

// tydzień 2
const elements2 = [
    { id: "data2", value: data2 },
    { id: "poniedzialek2", value: poniedzialek2 },
    { id: "wtorek2", value: wtorek2 },
    { id: "sroda2", value: sroda2 },
    { id: "czwartek2", value: czwartek2 },
    { id: "piatek2", value: piatek2 },
    { id: "sobota2", value: sobota2 },
    { id: "niedziela2", value: niedziela2 },
    { id: "sumaTydzien2", value: sumaTydzien2 },
    { id: "sredniaTydzien2", value: sredniaTydzien2.toFixed(0) }
];

elements2.forEach(element => {
    document.getElementById(element.id).innerHTML = element.value;
});



const test1 = "sssssss";

for (let i = 1; i <= 7; i++) {
    document.getElementById("plusMinus" + (i === 1 ? "" : i)).innerHTML = test1;
}