const numbButtons = Array.from(document.querySelectorAll(".number"));
const clearAll = document.querySelector(".clear");
const display = document.querySelector(".calc_Display");
const equals = document.querySelector(".equals");
const operators = Array.from(document.querySelectorAll(".operator"));


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
    result = (newNumb1 / 100);
    return result;
  }else if (operator === "%") {
    result = (newNumb1 / 100) * 100;
    return result;
  }
};

const handleSum = () => {
  display.innerHTML = mathsEquation(numb1, numb2, operator);
};

equals.addEventListener("click", handleSum);


