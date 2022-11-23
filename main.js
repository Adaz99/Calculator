const numbButtons = Array.from(document.querySelectorAll(".number"));
const clearAll = document.querySelector(".clear");
const display = document.querySelector(".calc_Display");
const equals = document.querySelector(".equals");
const operators = Array.from(document.querySelectorAll(".operator"));
const posNeg = document.querySelector(".posNeg");
const decimal = document.querySelector("#butt_dot");


// empty strings 
let numb1 = "";

let numb2 = "";

let operator = "";

// Displays the numbers on calculator using click event
numbButtons.forEach((nums) => {
  nums.addEventListener("click", (event) => {
    display.innerHTML += event.target.innerHTML;
    if (operator == "") {
      numb1 += nums.innerHTML;
    } else {
      numb2 += nums.innerHTML;
    }
  });
});
console.log(numbButtons);

// operators are displaying when clicked
operators.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (numb1 != "") {
      operator = button.innerHTML;
    }
    display.innerHTML += event.target.innerHTML;
  });
});

posNeg.addEventListener("click", (event) => {
  numb1 = Number(display.innerHTML);
  if (display.innerHTML.includes("-")) {
    numb1 = Math.abs(numb1);
    display.innerHTML = numb1;
  } else {
    numb1 = -Math.abs(numb1);
    display.innerHTML = numb1;
  }
});



// Clears text from calculator display
const reset = () => {
  numb1 = "";
  numb2 = "";
  operator = "";
  display.innerHTML = "";
};
clearAll.addEventListener("click", reset);

// Got the basic operators working including %

const mathsEquation = (numb1, numb2, operator) => {
  let newNumb1 = Number(numb1);
  console.log(newNumb1);
  let newNumb2 = Number(numb2);
  console.log(newNumb2);
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

const basicCalc = () => {
  const answer = mathsEquation(numb1, numb2, operator);
  numb1 = answer;
  numb2 = "";
  display.innerHTML = answer;
  
};



equals.addEventListener("click", basicCalc);
