const convertToCelsius = function(farenheit) {
  let celsius = (farenheit - 32) * 5/9
  return +celsius.toFixed(1)
};

const convertToFahrenheit = function(celsius) {
  // (x × 9 / 5 + 32)
  let farenheit = celsius * 9 / 5 + 32
  return +farenheit.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
