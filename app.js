let billEl = document.getElementById("bill");
let peopleEl = document.getElementById("people");
let tipAmountEl = document.getElementById("tipAmount");
let errorEl = document.getElementById("error");
let numOfPeopleErroEl = document.getElementById("numOfPeopleError");
let amountPerPerson = document.getElementById("amountPerPerson");

function tipAmount(percentgae) {
  errorEl.textContent = "";

  const billValue = Number(billEl.value);

  if (Number.isInteger(billValue) && billValue !== 0) {
    let tipTotal = (percentgae / 100) * billValue;
    tipAmountEl.textContent = tipTotal.toFixed(2);
    return tipTotal;
  } else {
    errorEl.textContent = "Enter a valid number that is not zero";
    return 0;
  }
}

function totalAmount() {
  numOfPeopleErroEl.textContent = "";

  const peopleValue = Number(peopleEl.value);
  const billValue = Number(billEl.value);
  const tipValue = Number(tipAmountEl.textContent) || 0;

  if (Number.isInteger(peopleValue) && peopleValue !== 0) {
    let totalCost = (billValue + tipValue) / peopleValue;
    amountPerPerson.textContent = totalCost.toFixed(2);
    return totalCost;
  } else {
    numOfPeopleErroEl.textContent = "Enter a valid number that is not zero";
    return 0;
  }
}
function reset() {
  billEl.value = "";
  peopleEl.value = "";
  tipAmountEl.textContent = "0.00";
  amountPerPerson.textContent = "0.00";
  errorEl.textContent = "";
  numOfPeopleErroEl.textContent = "";
}
