//@ts-nocheck
// option 1 => celsius to fahrenheit
// option 2 => fahrenheit to celsius
// any other option => invalid option

const conversionOption = document.getElementById('conversionOption');
const temperatureInput = document.getElementById('temperatureInput');
const convertBtn = document.getElementById('convertBtn');
const resultMsg = document.getElementById('resultMsg');

function celsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

function FahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

convertBtn.addEventListener('click', handleTemperatureConversion);

function handleTemperatureConversion() {
  const option = Number(conversionOption.value);
  const tempValue = Number(temperatureInput.value.trim());

  if (!option || isNaN(tempValue)) {
    resultMsg.textContent =
      '❌ Please select a conversion type and enter a valid temperature.';
    return;
  }

  if (option === 1) {
    const result = celsiusToFahrenheit(tempValue);
    resultMsg.textContent = `${tempValue} = ${result.toFixed(2)}`;
    resultMsg.style.color = '#388e3c';
  } else if (option === 2) {
    const result = FahrenheitToCelsius(tempValue);
    resultMsg.textContent = `${tempValue} = ${result.toFixed(2)}`;
    resultMsg.style.color = '#1976d2';
  } else {
    resultMsg.textContent = 'Invalid option selected';
  }
}
