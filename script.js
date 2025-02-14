// Selección de elementos
const greenSlider = document.getElementById('green-slider');
const redSlider = document.getElementById('red-slider');
const greenBox = document.getElementById('green-box');
const redBox = document.getElementById('red-box');
const greenHex = document.getElementById('green-hex');
const redHex = document.getElementById('red-hex');

// Función para convertir RGB a Hexadecimal
function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)
        .toUpperCase()}`;
}

// Actualizar color verde
greenSlider.addEventListener('input', () => {
    const greenValue = parseInt(greenSlider.value);
    greenBox.style.backgroundColor = `rgb(0, ${greenValue}, 0)`;
    greenHex.textContent = rgbToHex(0, greenValue, 0);
});

// Actualizar color rojo
redSlider.addEventListener('input', () => {
    const redValue = parseInt(redSlider.value);
    redBox.style.backgroundColor = `rgb(${redValue}, 0, 0)`;
    redHex.textContent = rgbToHex(redValue, 0, 0);
});
