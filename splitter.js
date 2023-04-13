
function calculateExpenses(n) {
    let billAmount = parseFloat(document.getElementById('billAmount').value);
    let numberOfPeople = parseFloat(document.getElementById('numOfPeople').value);
    let tipPerPerson = (billAmount * n) / numberOfPeople;
    let totalForPerson = tipPerPerson + (billAmount / numberOfPeople);
    document.getElementById('tipPerPerson').innerHTML = "$" + tipPerPerson.toFixed(2);
    document.getElementById('totalPerPerson').innerHTML = "$" + totalForPerson.toFixed(2);
}

function customTip() {
    let billAmount = parseFloat(document.getElementById('billAmount').value);
    let numberOfPeople = parseFloat(document.getElementById('numOfPeople').value);
    let tipAmount = parseFloat(document.getElementById('customTip').value) / 100;
    let tipPerPerson = (billAmount * tipAmount) / numberOfPeople;
    let totalForPerson = tipPerPerson + (billAmount / numberOfPeople);
    document.getElementById('tipPerPerson').innerHTML = "$" + tipPerPerson.toFixed(2);
    document.getElementById('totalPerPerson').innerHTML = "$" + totalForPerson.toFixed(2);
}

function reset() {
    document.getElementById('tipPerPerson').innerHTML = "$0.00";
    document.getElementById('totalPerPerson').innerHTML = "$0.00";
}