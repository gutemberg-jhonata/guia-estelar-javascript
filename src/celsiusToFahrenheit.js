const value = "250C"

function celsiusFahrenheit(value) {
    const lastCharacter = value[value.length - 1];
    const isCelsius = lastCharacter === 'C';

    const degrees = Number(value.split(lastCharacter)[0]);
    let convertedValue;

    if (isCelsius) {
        convertedValue = (degrees - 32) * 5/9;
    } else {
        convertedValue = (degrees * 9/5) + 32;
    }

    console.log(`Valor convertido: ${convertedValue.toFixed(2)} ${isCelsius ? 'F' : 'C'}`);
}

celsiusFahrenheit(value);