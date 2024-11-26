// VARIABLES
  let displayedNumber   = ''
  let number1           = ''
  let number2           = ''
  let operator          = ''


// SELECTORS
  const _1              = document.getElementById('_1')
  const _plus           = document.getElementById('_plus')
  const _minus          = document.getElementById('_minus')
  const _multiply       = document.getElementById('_multiply')
  const _divide         = document.getElementById('_divide')
  const _decimal        = document.getElementById('_decimal')
  const _percentage     = document.getElementById('_percentage')
  const _del            = document.getElementById('_del')
  const _reset          = document.getElementById('_reset')
  const _equals         = document.getElementById('_equals')

  const _input = document.querySelector('.input')

// FUNCTIONS
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

    
  function addDigit(digit, place) {
    displayedNumber = displayedNumber + '' + digit
    _input.innerText = displayedNumber
    if (place == '1') {
      number1 = Number(displayedNumber)
    } else if (place == '2') {
      number2 = Number(displayedNumber)
    } else {
      alert('place non définie')
    }
  }

addDigit(1, '1')
addDigit(5, 'first')
addDigit(3, 'first')
console.log(number1+number1)

handleDigits();

// Ajouter Toggle CSS https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29