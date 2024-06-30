// tydzien 1
const pmT1pn = (poniedzialek2 - poniedzialek1);
const pmT1wt = (wtorek2 - wtorek1);
const pmT1sr = (sroda2 - sroda1);
const pmT1cz = (czwartek1 - czwartek2);
const pmT1pt = (piatek1 - piatek2);
const pmT1sb = (sobota1 - sobota2);
const pmT1nd = (niedziela1 - niedziela2);


if (poniedzialek1 < poniedzialek2) {
    document.getElementById("t1pn").innerHTML = "🟩" + pmT1pn;
} else if (poniedzialek1 > poniedzialek2) {
    document.getElementById("t1pn").innerHTML = "🟥" + pmT1pn;
} else {
    document.getElementById("t1pn").innerHTML = "🟨" + pmT1pn;
}

if (wtorek1 < wtorek2) {
    document.getElementById("t1wt").innerHTML = "🟩" + pmT1wt;
} else if (wtorek1 > wtorek2) {
    document.getElementById("t1wt").innerHTML = "🟥" + pmT1wt;
} else {
    document.getElementById("t1wt").innerHTML = "🟨" + pmT1wt;
}

if (sroda1 < sroda2) {
    document.getElementById("t1sr").innerHTML = "🟩" + pmT1sr;
} else if (sroda1 > sroda2) {
    document.getElementById("t1sr").innerHTML = "🟥" + pmT1sr;
} else {
    document.getElementById("t1sr").innerHTML = "🟨" + pmT1sr;
}

if (czwartek1 < czwartek2) {
    document.getElementById("t1cz").innerHTML = "🟩" + pmT1cz;
} else if (czwartek1 > czwartek2) {
    document.getElementById("t1cz").innerHTML = "🟥" + pmT1cz;
} else {
    document.getElementById("t1cz").innerHTML = "🟨" + pmT1cz;
}

if (piatek1 < piatek2) {
    document.getElementById("t1pt").innerHTML = "🟩" + pmT1pt;
} else if (piatek1 > piatek2) {
    document.getElementById("t1pt").innerHTML = "🟥" + pmT1pt;
} else {
    document.getElementById("t1pt").innerHTML = "🟨" + pmT1pt;
}

if (sobota1 < sobota2) {
    document.getElementById("t1sb").innerHTML = "🟩" + pmT1sb;
} else if (sobota1 > sobota2) {
    document.getElementById("t1sb").innerHTML = "🟥" + pmT1sb;
} else {
    document.getElementById("t1sb").innerHTML = "🟨" + pmT1sb;
}

if (niedziela1 < niedziela2) {
    document.getElementById("t1nd").innerHTML = "🟩" + pmT1nd;
} else if (niedziela1 > niedziela2) {
    document.getElementById("t1nd").innerHTML = "🟥" + pmT1nd;
} else {
    document.getElementById("t1nd").innerHTML = "🟨" + pmT1nd;
}