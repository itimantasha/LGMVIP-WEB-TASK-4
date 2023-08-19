let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    updateResult();
}

function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    updateResult();
}

function clearResult() {
    currentInput = '';
    updateResult();
}

function calculate() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        updateResult();
    } catch (error) {
        currentInput = 'Error';
        updateResult();
    }
}

function updateResult() {
    const resultInput = document.getElementById('result');
    resultInput.value = currentInput;
}
