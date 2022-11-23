// Creating variables for js which will be used 
const numbButtons = Array.from(document.querySelectorAll(".number"));
const clearAll = document.querySelector(".clear");
const displayCalc = document.querySelector(".calc_Display");
const equals = document.querySelector(".equals");
const operators = Array.from(document.querySelectorAll(".operator"));
const posNeg = document.querySelector(".posNeg");
const decimal = document.querySelector("#butt_dot");


// empty strings will be used for storing operators and numbs
let numb1 = "";

let numb2 = "";

let operator = "";

// Displays the numbers 0-9 on calculator using click event
numbButtons.forEach((nums) => {
  nums.addEventListener("click", (event) => {
    displayCalc.innerHTML += event.target.innerHTML;
    if (operator == "") {
      numb1 += nums.innerHTML;
    } else {
      numb2 += nums.innerHTML;
    }
  });
});
console.log(numbButtons);

// operators "+*/-" are displaying when clicked
operators.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (numb1 != "") {
      operator = button.innerHTML;
    }
    displayCalc.innerHTML += event.target.innerHTML;
  });
});

// created a pos/neg function using Math.abs if a number is positive it will turn it negative vice versa
posNeg.addEventListener("click", (event) => {
  numb1 = Number(displayCalc.innerHTML);
  if (displayCalc.innerHTML.includes("-")) {
    numb1 = Math.abs(numb1);
    displayCalc.innerHTML = numb1;
  } else {
    numb1 = -Math.abs(numb1);
    displayCalc.innerHTML = numb1;
  }
});


// Clears text from calculator display when the button is clicked
const reset = () => {
  numb1 = "";
  numb2 = "";
  operator = "";
  displayCalc.innerHTML = "";
};
clearAll.addEventListener("click", reset);

// Got the basic operators working including which display on screen
const mathsEquation = (numb1, numb2, operator) => {
  let newNumb1 = Number(numb1);
  // console.log(newNumb1);
  let newNumb2 = Number(numb2);
  // console.log(newNumb2);
  if (operator === "-") {
    result = newNumb1 - newNumb2;
    return result;
  } else if (operator === "+") {
    result = newNumb1 + newNumb2;
    return result;
  } else if (operator === "÷") {
    result = newNumb1 / newNumb2;
    return result;
  } else if (operator === "*") {
    result = newNumb1 * newNumb2;
    return result;
  } else if (operator === "%") {
    result = newNumb1 / 100;
    return result;
    
  }
};

// Able to use multiple calculations by storing a variable
const basicCalc = () => {
  const answer = mathsEquation(numb1, numb2, operator);
  numb1 = answer;
  numb2 = "";
  displayCalc.innerHTML = answer;
  
};

//created a decimal function which allows the use of decimals for both numbers
decimal.addEventListener("click", () => {
  if (numb1.includes(".") && numb2.includes(".")) {
  } else if (numb2 == "") {
    displayCalc.innerHTML = `${displayCalc.innerHTML}` + ".";
    numb1 += ".";
  } else {
    displayCalc.innerHTML = `${displayCalc.innerHTML}` + ".";
    numb2 += ".";
  }
});

// Runs basicCalc function when = is clicked
equals.addEventListener("click", basicCalc);
