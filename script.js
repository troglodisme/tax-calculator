//display a message when page is loaded
console.log("loaded");

//add element to show results in html
let results = document.querySelector("#results");
console.log(results);


//2022/2023
//Personal allowance, 0%
const bracket_1 = 12570;
//Basic rate, 20%
const bracket_2 = 50270;
//Higher rate, 40%
const bracket_3 = 150000;


//2021/2022
//Personal allowance, 0%
const bracket_1_old = 12750;
//Basic rate, 20%
const bracket_2_old = 37700;
//Higher rate, 40%
const bracket_3_old = 150000;


//Calculator
document.querySelector("#submit").addEventListener("click", function (event) {
  event.preventDefault();

  //get income input value
  const income = document.querySelector('[name="income"]').value;

  //get year
  const taxYear = document.querySelector('#taxYear').value;

  //get period
  const taxPeriod = document.querySelector('#taxPeriod').value;

  //turn monthly into yearly
//   if (taxPeriod == "month"){
//       console.log("month");
//       console.log(income);

//       income = income * 12;
//       console.log(income);
//   }

//for tax year 2022/2023
if (taxYear == 23) {

    if (income > 0 && income < bracket_1) {
        taxPercentage = 0;

        let result = calculateTax(taxPercentage, income);        
        updateResult(result);

    } else if (income > bracket_1 && income < bracket_2) {
        taxPercentage = 20;

        let result = calculateTax(taxPercentage, income);        
        updateResult(result);


    } else if (income > bracket_2 && income < bracket_3) {
        taxPercentage = 40;

        let result = calculateTax(taxPercentage, income);        
        updateResult(result);


    } else if (income >= bracket_3) {
        taxPercentage = 45;

        let result = calculateTax(taxPercentage, income);        
        updateResult(result);
      
    } 



    //for tax year 2021/2022
} else if (taxYear == 22) {

    if (income > 0 && income < bracket_1_old) {
        taxPercentage = 0;

        let result = calculateTax(taxPercentage, income);        
        updateResult(result);

    } else if (income > bracket_1_old && income < bracket_2_old) {
        taxPercentage = 20;

        let result = calculateTax(taxPercentage, income);        
        updateResult(result);


    } else if (income > bracket_2_old && income < bracket_3_old) {
        taxPercentage = 40;

        let result = calculateTax(taxPercentage, income);        
        updateResult(result);

    } else if (income >= bracket_3_old) {
        taxPercentage = 45;

        let result = calculateTax(taxPercentage, income);        
        updateResult(result);

    }    
}

else {
    alert("Sorry, we don't have data for that tax year anymore...");
}
    
});

function calculateTax(taxPercentage, income){
    
    const taxCalculated = (taxPercentage / 100) * income;
    // console.log(`you will pay ${taxCalculated} in taxes`);

    const takeHome = (income - taxCalculated);
    // console.log(`you will take ${takeHome} home after taxes this year`);

    let takeHomeMonthly = Math.round(takeHome / 12);
    // console.log(`you will take ${takeHome} home after taxes in a month`);

    return [taxCalculated, takeHome, takeHomeMonthly];
}


//function to update html using the results from the previous function
function updateResult(result) {
    results.classList.remove('hidden');

    document.getElementById("your-tax").innerHTML = result[0];
    document.getElementById("your-net").innerHTML = result[1];
    document.getElementById("your-monthly").innerHTML= result[2];
}


//TO DO:

//make tax year parametric
//add other options
//understand why if you add one extra zero it breaks