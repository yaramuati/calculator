let currentOperand = '0';
let operator = '';
let previousOperand = '';

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = currentOperand;
}

function appendNumber(number) {
    if (currentOperand === '0' || currentOperand === '-0') {
        currentOperand = number;
    } else {
        currentOperand += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!currentOperand.includes('.')) {
        currentOperand += '.';
    }
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    previousOperand = currentOperand;
    currentOperand = '0';
    updateDisplay();
}

function calculateResult() {
    const num1 = parseFloat(previousOperand);
    const num2 = parseFloat(currentOperand);

    switch (operator) {
        case '+':
            currentOperand = (num1 + num2).toString();
            break;
        case '-':
            currentOperand = (num1 - num2).toString();
            break;
        case '*':
            currentOperand = (num1 * num2).toString();
            break;
        case '/':
            if (num2 !== 0) {
                currentOperand = (num1 / num2).toString();
            } else {
                currentOperand = 'Error';
            }
            break;
        default:
            break;
    }

    operator = '';
    previousOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '0';
    operator = '';
    previousOperand = '';
    updateDisplay();
}

updateDisplay();