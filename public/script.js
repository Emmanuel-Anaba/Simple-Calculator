const h1 = document.querySelector("h1");

function operation(i, num1, num2) {
  if (i === 0) {
    return num1 + num2;
  } else if (i === 1) {
    return num1 - num2;
  } else if (i === 2) {
    return num1 / num2;
  } else if (i === 3) {
    return num1 * num2;
  } else if (i === 4) {
    return num1 % num2;
  }
}

function getValues() {
  const number1 = Number(document.getElementById("num1").value);
  const number2 = Number(document.getElementById("num2").value);
  const operator = document.getElementById("operator");
  const index = operator.selectedIndex;

  h1.textContent = operation(index, number1, number2);
  console.log(operator);
}
