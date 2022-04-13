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


//Calculator select inputs

document.querySelector("#submit").addEventListener("click", function (event) {
  event.preventDefault();

  //get income input value
  let income = document.querySelector('[name="income"]').value;

  //get year
  const taxYear = document.querySelector('#taxYear').value;

  //get period
  const taxPeriod = document.querySelector('#taxPeriod').value;



  //Turn monthly into yearly (rough)
  if (taxPeriod == "month"){
      console.log("month selected");
      console.log(income + "in a month");

      income = income * 12;
      console.log(income + "in a year");
  }

  //Turn weekly into yearly (rough)
  if (taxPeriod == "week"){
    console.log("week selected");
    console.log(income + "in a week");

    income = income * 52;
    console.log(income + "in a year");
}

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



//Function to calculate and return tax

function calculateTax(taxPercentage, income){
    
    //substract allowance 
    const incomeMinusAllowance = income - bracket_1;
    console.log(incomeMinusAllowance);
    console.log(`your taxed income after allowance is ${incomeMinusAllowance}`); //doesn't work on bracket_1 incomes as it substracts itself 

    //calculate tax percentage 
    const taxCalculated = (taxPercentage / 100) * incomeMinusAllowance;   
    console.log(`you will pay ${taxCalculated} in taxes`);

    //calculate what's left after taxes
    const takeHome = (income - taxCalculated);
    console.log(`you will take ${takeHome} home after taxes this year`);

    //round that up for monthly salary
    let takeHomeMonthly = Math.round(takeHome / 12);
    console.log(`you will take ${takeHome} home after taxes in a month`);

    return [taxCalculated, takeHome, takeHomeMonthly];
}


//Function to update html using the returns from the previous function
function updateResult(result) {
    results.classList.remove('hidden');

    document.getElementById("your-tax").innerHTML = result[0];
    document.getElementById("your-net").innerHTML = result[1];
    document.getElementById("your-monthly").innerHTML= result[2];
}


//TO DO:

//add period
//add age
//add animations