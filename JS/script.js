const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
function calculate() {
    display.value = eval(display.value);
}

document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9') {
        appendValue(event.key);
    }

    if (['+', '-', '*', '/', '.'].includes(event.key)) {
        appendValue(event.key);
    }

    if (event.key === 'Enter' || event.key === '=') {
        calculate();
    }

    if (event.key === 'Backspace') {
        deleteLast();
    }

    if (event.key === 'Escape') {
        clearDisplay();
    }
});