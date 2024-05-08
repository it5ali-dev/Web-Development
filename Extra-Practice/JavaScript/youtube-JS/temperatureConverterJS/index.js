const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const tocelcius = document.getElementById('tocelcius');
const result = document.getElementById('result');

let temp;

const convert = document.getElementById('convert');
const clear = document.getElementById('clear');

convert.addEventListener('click', () => {
    if (toFahrenheit.checked) {
        temp = (textBox.value * 9 / 5) + 32;
        result.textContent = temp.toFixed(2) + "℉";
    } else if (tocelcius.checked) {
        temp = (textBox.value - 32) * 5 / 9;
        result.textContent = temp.toFixed(2) + "℃";
    } else {
        result.textContent = 'Please select a unit';
    }
});

clear.addEventListener('click', () => {
    textBox.value = 0;
    result.textContent = '';
});