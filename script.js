const textbox = document.getElementById("textBox");
const toCel = document.getElementById("toCel");
const toFah = document.getElementById("toFah");
const result = document.getElementById("result");
let temp;

function Submit() {
  if (toCel.checked) {
    temp = (Number(textbox.value) * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "C";
  } else if (toFah.checked) {
    temp = ((Number(textbox.value) - 32) * 5) / 9;
    result.textContent = temp.toFixed(1) + "F";
  } else {
    result.textContent = "Select a unit";
  }
}
