const convertToCelsius = function(temp) {
  //°C = (°F - 32) × 5/9
  let tempInCelsius = (temp-32)*(5/9);
  //var rounded = Math.round(number * 10) / 10
  let roundedCelcius = Math.round(tempInCelsius*10)/10;
  return roundedCelcius;
};

const convertToFahrenheit = function(temp) {
  //°F = (9/5) °C+32
  let tempInFahrenheit = (9/5)*temp+32;
  let roundedFahrenheit = Math.round(tempInFahrenheit*10)/10;
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
