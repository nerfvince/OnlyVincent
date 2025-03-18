const conversionFactors = {
    meters: 1,
    kilometers: 1000,
    inches: 0.0254,
    centimeters: 0.01,
};

function convertValue(value, fromUnit, toUnit) {
    if (!value) return 0; // If there's no input value, return 0
    const valueInMeters = value * conversionFactors[fromUnit];
     return valueInMeters / conversionFactors[toUnit];
}

function updateConversion() {
    const valueFrom = parseFloat(document.getElementById('valueFrom').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;
    const result = convertValue(valueFrom, unitFrom, unitTo);
    document.getElementById('result').textContent = result.toFixed(4); // Display 4 decimal places
}

document.getElementById('valueFrom').addEventListener('input', updateConversion);
document.getElementById('unitFrom').addEventListener('change', updateConversion);
document.getElementById('unitTo').addEventListener('change', updateConversion);

updateConversion();
