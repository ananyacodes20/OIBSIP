function convertTemp() {
  let temp = parseFloat(document.getElementById("tempInput").value);
  let from = document.getElementById("fromUnit").value;
  let to = document.getElementById("toUnit").value;
  let result = document.getElementById("result");

  if (isNaN(temp)) {
    result.innerText = "Please enter a temperature!";
    return;
  }

  let celsius;

  // Pehle sabko Celsius me badlo
  if (from === "celsius") {
    celsius = temp;
  } else if (from === "fahrenheit") {
    celsius = (temp - 32) * 5 / 9;
  } else if (from === "kelvin") {
    celsius = temp - 273.15;
  }

  let finalTemp;
  let symbol;

  // Ab Celsius se target me badlo
  if (to === "celsius") {
    finalTemp = celsius;
    symbol = "°C";
  } else if (to === "fahrenheit") {
    finalTemp = (celsius * 9 / 5) + 32;
    symbol = "°F";
  } else if (to === "kelvin") {
    finalTemp = celsius + 273.15;
    symbol = "K";
  }

  result.innerText = "Result: " + finalTemp.toFixed(2) + " " + symbol;
}
