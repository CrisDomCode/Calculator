// BASIC FUNCTIONS
  function operate(a, operator, b) {
    switch (operator) {
      case '+':
        return a + b
        break;
      case '-':
        return a - b
        break;
      case '*':
        return a * b
        break;
      case '/':
        return a / b
        break;
      default:
        break;
    }
  }

let a = Number(prompt("First number ?"))
let operator = prompt("Operator ?")
let b = Number(prompt("Second number ?"))

alert(operate(a, operator, b))

// Ajouter Toggle CSS https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29