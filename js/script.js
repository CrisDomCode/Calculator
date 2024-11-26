// VARIABLES

// SELECTORS
  const _plus         = document.getElementById('_plus')
  const _minus        = document.getElementById('_minus')
  const _multiply     = document.getElementById('_multiply')
  const _divide       = document.getElementById('_divide')
  const _decimal      = document.getElementById('_decimal')
  const _percentage   = document.getElementById('_percentage')
  const _del          = document.getElementById('_del')
  const _reset        = document.getElementById('_reset')
  const _equals       = document.getElementById('_equals')

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

  function handleDigits() {
    const elements = [
      { id: '_1', value: 1 },
      { id: '_2', value: 2 },
      { id: '_3', value: 3 },
      { id: '_4', value: 4 },
      { id: '_5', value: 5 },
      { id: '_6', value: 6 },
      { id: '_7', value: 7 },
      { id: '_8', value: 8 },
      { id: '_9', value: 9 },
      { id: '_0', value: 0 },
    ];

    elements.forEach(({ id, value }) => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('click', () => {
          console.log(value);
        });
      }
    });
  }
    
  

handleDigits();

// Ajouter Toggle CSS https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29