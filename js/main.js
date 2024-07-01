// Display chatPraca and eModerators values
["chatPraca", "eModerators"].forEach(key => {
    const value = values[key];
    setInnerHTML(key, `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}&euro; / ${(value * values.przelicznikEuro).toFixed(2)}zł`);
});

// Display minimal messages
setInnerHTML("minChatPraca", `Minimalna ilość wiadomości w ChatPraca: ${values.minChatPraca} / ${(values.minChatPraca / values.dniTygodnia).toFixed()} na dzień`);
setInnerHTML("mineModerators", `Minimalna ilość wiadomości w EModerators: ${values.mineModerators} / ${(values.mineModerators / values.dniTygodnia).toFixed()} na dzień`);

// Calculate total expenses
const totalExpenses = Object.values(values.months).reduce((a, b) => a + b, 0);
setInnerHTML("razemWydatkiMatka", `${totalExpenses}zł`);

// Display monthly expenses and remaining amounts
Object.keys(values.months).forEach(month => {
    const amount = values.months[month];
    const oddane = values.monthsOddane[month];
    const remaining = oddane - amount;

    setInnerHTML(month, `${amount}zł`);
    setInnerHTML(`${month}Oddane`, `${oddane}zł`);
    setInnerHTML(`${month}OddanePozostalo`, `${remaining}zł`);

    const color = oddane === amount ? "green" : "red";
    setBackgroundColor(`${month}Oddane`, color);
});

// Adding each entry from the array to the HTML
wydatkiWplaty.forEach(entry => {
    addWydatkiWplaty(entry.data, entry.kwota);
});
