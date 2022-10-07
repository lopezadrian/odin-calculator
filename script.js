const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const userInputs = [];
let previousInputClass;

function add(a, b) {
    let sum = a + b;
    return sum;
}

function subtract(a, b) {
    let difference = a - b;
    return difference;
}

function multiply(a, b) {
    let product = a * b;
    return product;
}

function divide(a, b) {
    let quotient = a / b;
    quotient = quotient.toFixed(3);
    return quotient;
}

function operate(a, operator, b) {
    let calculatedValue;
    switch (operator) {
        case '+':
            calculatedValue = add(a, b);
            break;
        case '-':
            calculatedValue = subtract(a, b);
            break;
        case '*':
            calculatedValue = multiply(a, b);
            break;
        case '/':
            calculatedValue = divide(a, b);
            break;
        default:
            console.log('Empty action received');
    }
    return calculatedValue;
}

function evaluateUserInputs() {
    let a, operator, b;
    let goThroughThreeElements = 1;
    for (const userInput of userInputs) {
        if (goThroughThreeElements === 1) {
            a = parseInt(userInput);
        } else if(goThroughThreeElements === 2) {
            operator = userInput;
        } else if(goThroughThreeElements === 3) {
            b = parseInt(userInput);
            evaluatedInput = operate(a, operator, b);
            userInputs.splice(0, 3, evaluatedInput);
            goThroughThreeElements = 0;
        }
        goThroughThreeElements++;
    }
}

function useCalculator(e) {
    const buttonValue = this.textContent;
    const typeOfButtonPressed = this.classList.value;

    switch (typeOfButtonPressed) {
        case 'number': {
            if (userInputs.length === 0) {
                userInputs.push(buttonValue);
            } else if (previousInputClass != 'number') {
                userInputs.push(buttonValue);
            } else {
                const lastNumber = userInputs.pop();
                const runningNumber = lastNumber + buttonValue;
                userInputs.push(runningNumber);
            }
            break;
        }
        case 'operator': {
            if (previousInputClass === 'operator') break;
            userInputs.push(buttonValue);
            break;
        }
        case 'equals': {
            if (userInputs.length < 3) break;
            else evaluateUserInputs();
            break;
        }
        case 'clear': {
            userInputs.length = 0;
            break;
        }
    }

    display.textContent = userInputs.join(' ');
    previousInputClass = typeOfButtonPressed;
    console.log(userInputs);
}

buttons.forEach(button => button.addEventListener('click', useCalculator));