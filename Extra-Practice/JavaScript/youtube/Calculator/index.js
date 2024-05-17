const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        const result = eval(display.value); // Note: Using eval() can be dangerous if you don't trust the input
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
