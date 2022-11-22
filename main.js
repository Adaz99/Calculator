const numButtons = Array.from(document.querySelectorAll(".number"));
const clearAll = document.querySelector(".clear");
const display = document.querySelector(".calc_Display");

// Displays the numbers on calculator using click event
numButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    display.innerHTML += event.target.innerHTML;
  });
  console.log(button);
});

// Clears text from calculator display
const reset = () => {
  display.innerHTML = "";
};
clearAll.addEventListener("click", reset);
