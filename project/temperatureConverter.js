function celsiusToFahrenheit(c) {
  const farhenheit = c * 1.8 + 32;
  return farhenheit;
}
function fahrenheitToCelsius(f) {
  const celcius = (f - 32) / 1.8;
  return `${celcius}`;
}
function formatTemperature(fahrenheit, val) {
  return `${fahrenheit} ${val}`;
}
const fahrenheit = celsiusToFahrenheit(25);
console.log(formatTemperature(fahrenheit, 'F'));
const celsius = fahrenheitToCelsius(68);
console.log(formatTemperature(celsius, 'C'));
const freezingFahrenheit = celsiusToFahrenheit(0);
console.log(formatTemperature(freezingFahrenheit, 'F'));
const freezingCelsius = fahrenheitToCelsius(32);
console.log(formatTemperature(freezingCelsius, 'C'));
