const circleEl = document.querySelector(".circle");
const inputEl = document.querySelector("#input");
let isChecked = inputEl.checked;
console.log(isChecked);

const handleCheckbox = () => {
  if (inputEl.checked) {
    circleEl.innerHTML = `<i class='bx bx-stop'></i>`;
  } else {
    circleEl.innerHTML = `<i class='bx bx-play'></i>`;
  }
};

inputEl.addEventListener("change", handleCheckbox);
