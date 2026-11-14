function convertTemp() {
  let temp = parseFloat(document.getElementById("tempInput").value);
  let from = document.getElementById("fromUnit").value;
  let to = document.getElementById("toUnit").value;
  let resultBox = document.getElementById("result");

  if (isNaN(temp)) {
    resultBox.innerText = "Please enter a temperature!";
    return;
  }

  // First convert to Celsius
  let inCelsius;
  if (from === "celsius") inCelsius = temp;
  if (from === "fahrenheit") inCelsius = (temp - 32) * 5 / 9;
  if (from === "kelvin") inCelsius = temp - 273.15;

  // Then convert from Celsius to target
  let result;
  if (to === "celsius") result = inCelsius;
  if (to === "fahrenheit") result = (inCelsius * 9 / 5) + 32;
  if (to === "kelvin") result = inCelsius + 273.15;

  resultBox.innerText = temp + "° " + from + " = " + result.toFixed(2) + "° " + to;
}
