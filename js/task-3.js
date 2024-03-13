const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  console.log(event);
  if (event.currentTarget.value.trim() === "") {
    return (textOutput.textContent = "Anonymous");
  } else {
    return (textOutput.textContent = event.currentTarget.value);
  }
});

console.log(textInput);
console.log(textOutput);
