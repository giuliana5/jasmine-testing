window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const defaultValues = {amount: 15000, years: 3, rate: 2.5};
  const amountInput = document.getElementById("loan-amount");
  const yearsInput = document.getElementById("loan-years");
  const rateInput = document.getElementById("loan-rate");
  amountInput.value = defaultValues.amount;
  yearsInput.value = defaultValues.years;
  rateInput.value = defaultValues.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let i = (values.rate / 100) / 12;
  let n = values.years * 12;
  let p = values.amount;
  let result = (p * i) / (1 - (1 + i)**(-(n)))
  return parseFloat(result).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = monthly;
}
