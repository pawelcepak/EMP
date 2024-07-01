// Function to set innerHTML
function setInnerHTML(id, value) {
    document.getElementById(id).innerHTML = value;
}

// Function to set element background color
function setBackgroundColor(id, color) {
    document.getElementById(id).style.backgroundColor = color;
}

// Function to add expense or income information
function addWydatkiWplaty(data, kwota) {
    const container = document.getElementById('wydatkiWplaty');
    const entry = document.createElement('div');
    entry.innerHTML = `Data: ${data}, Kwota: ${kwota}zł`;
    container.appendChild(entry);
}
