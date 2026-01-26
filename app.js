let billEl = document.getElementById("bill_el");

let peopleEl = document.getElementById("people_el");

let tipAmountEl = document.getElementById("tip_amount");

let amountPerPerson = document.getElementById("Amount_per_person");

function tipAmount(percentgae) {
  let totalPercent = (percentgae / billEl) * 100;
  tipAmountEl.textContent = totalPercent;
}

function totalAmount() {
  let totalCost = billEl + tipAmountEl / peopleEl;
  amountPerPerson.textContent = totalCost;
}

// function reset() {
//   billEl.textContent = 0;
//   peopleEl.textContent = 0;
//   tipAmountEl.textContent = 0;
//   amountPerPerson.textContent = 0;
// }

function reset() {
  document.querySelectorAll("#reset").textContent.forEach(( ) = 0);
}
