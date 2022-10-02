function add(a, b) {
    sum = a + b;
    return sum;
}

function subtract(a, b) {
    difference = a - b;
    return difference;
}

function multiply(a, b) {
    product = a * b;
    return product;
}

function divide(a, b) {
    quotient = a / b;
    return quotient;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
        default:
            console.log('Empty action received');
    }
}