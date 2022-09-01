// ### Question 1

// Convert the following following code to use the `addEventListener` method:

const btn = document.querySelector(".btn");

// btn.addEventListener("click", function btnClick() {
//   console.log("I'm a button");
// });
// or

function btnClick() {
  console.log("I'm a button");
}

btn.addEventListener("click", btnClick);

// ### Question 2

// Add a click event using `addEventListener` to the second button.

// In the event's function, display the character count from the input in the `b.count` element.

// Make sure to remove all trailing and leading spaces (spaces at the beginning and end of the input's value).

const bCountInput = document.querySelector("input");
const btn2 = document.querySelector("form button");
const bCountOutput = document.querySelector("b.count");

function bCount() {
  const trimB = bCountInput.value.trim().length;
  bCountOutput.innerHTML = trimB;
}

btn2.addEventListener("click", bCount);

// // Question 2
// const input = document.querySelector("input");
// const countButton = document.querySelector("form button");
// const countOutput = document.querySelector("b.count");

// function countCharacters() {
//   const characterCount = input.value.trim().length;
//   countOutput.innerHTML = characterCount;
// }

// countButton.addEventListener("click", countCharacters);
