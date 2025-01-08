let calculation = localStorage.getItem("calculation") || "";

function updateCalculation(operator) {
  calculation += operator;
  localStorage.setItem("calculation", calculation);
  console.log(calculation);
  document.querySelector(".js-result").innerHTML = calculation;
  document.querySelector(".js-result").classList.add("input-result");
}
