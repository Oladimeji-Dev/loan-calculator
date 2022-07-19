// // Listen for submit
// document.getElementById('loan-form').addEventListener('submit', calculateResults);

// // Calculate Results
// function calculateResults(e){
//   console.log('Calculating...');
//   // UI Vars
//   const amount = document.getElementById('amount');
//   const interest = document.getElementById('interest');
//   const years = document.getElementById('years');
//   const monthlyPayment = document.getElementById('monthly-payment');
//   const totalPayment = document.getElementById('total-payment');
//   const totalInterest = document.getElementById('total-interest');

//   const principal = parseFloat(amount.value);
//   const calculatedInterest = parseFloat(interest.value) / 100 / 12;
//   const calculatedPayments = parseFloat(years.value) * 12;

//   // Compute monthly payment
//   const x = Math.pow(1 + calculatedInterest, calculatedPayments);
//   const monthly = (principal*x*calculatedInterest)/(x-1);

//   if(isFinite(monthly)) {
//     monthlyPayment.value = monthly.toFixed(2);
//     totalPayment.value = (monthly * calculatedPayments).toFixed(2);
//     totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
//   } else {
//     showError('Please check your numbers');
//   }

//   e.preventDefault();
// }

// // Show Error
// function showError(error){
//   // Create a div
//   const errorDiv = document.createElement('div');

//   // Get elements
//   const card = document.querySelector('.card');
//   const heading = document.querySelector('.heading');

//   // Add class
//   errorDiv.className = 'alert alert-danger';

//   // Create text node and append to div
//   errorDiv.appendChild(document.createTextNode(error));

//   // Insert error above heading
//   card.insertBefore(errorDiv, heading);

//   // Clear error after 3 seconds
//   setTimeout(clearError, 3000);
// }

// // Clear error
// function clearError(){
//   document.querySelector('.alert').remove();
// }

//collect all the var we need from the dom
const formLoan = document.getElementById("loan-form");
const loanAmount = document.querySelector("#amount");
const loanInterest = document.querySelector("#interest");
const loanYears = document.querySelector("#years");
const monthlyPayment =  document.getElementById("monthly-payment");
const totalPayment = document.getElementById("total-payment");
const totalInterest = document.getElementById("total-interest");
const loading = document.getElementById("loading");
const results = document.getElementById("results");
// event listener when it submit

formLoan.addEventListener('submit',loader);

function loader(e){

  loading.style.display = "block";
  results.style.display = "none";

  setTimeout(calculateResult, 3000);

  e.preventDefault()
}

function calculateResult(){
  loading.style.display = "none";
  results.style.display = "block";

  const principal = parseFloat(loanAmount.value);
  const calculatedInterest = parseFloat(loanInterest.value)/100/12;
  const calculatedPayments = parseFloat(loanYears.value)*12;

  //to compute the montly payment
  const x  = Math.pow(1 + calculatedInterest, calculatedPayments); 
  const monthly = (principal * x * calculatedInterest)/(x-1);
  if(isFinite(monthly)){
    
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value= (monthly * calculatedPayments).toFixed(2);

    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
  }
  else{
    
    showError("CHECK THERE ERROR IN THE INPUT");
  
  }


  console.log("calculating ");

}


function showError(message){
  const parentElement = document.querySelector(".card");
  const beforeElement = document.querySelector(".heading");

  const errorDiv = document.createElement("div");
  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(message));
  parentElement.insertBefore(errorDiv,beforeElement);
  results.style.display = "none";

  setTimeout(clearError, 3000);

}

function clearError(){

  document.querySelector(".alert").style.display = "none";
}