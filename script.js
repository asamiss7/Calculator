const calculator = document.querySelector(".main");
const keys = calculator.querySelector(".buttons");
const inputfield = document.querySelector(".input");
// const operatorsButton = document.querySelectorAll(".operators div");
// const numbersBUtton = document.querySelectorAll(".numbers div");
// const resultButton = document.querySelector("#result");
// const clearButton = document.querySelector("#clear")

keys.addEventListener('click', e => {
  if (e.target.matches('div')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = inputfield.textContent;

    if (!action) {
      if (displayedNum === '0') {
        inputfield.textContent = keyContent;
      } else {
          inputfield.textContent = displayedNum + keyContent;
        }
        }

    if (action === 'decimal') {
      inputfield.textContent = displayedNum + '.' ;
    }

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
      ) {
        key.classList.add('is-depressed');
        calculator.dataset.previousKeyType = 'operator';
        }

    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') {
        inputfield.textContent = keyContent;
      } else {
        inputfield.textContent = displayedNum + keyContent;
      }
    }

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }

    const calculate = (n1, operator, n2) => {
    let result = ''

    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2);
    }

    return result;
    }

    if (action === 'calculate') {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      inputfield.textContent = calculate(firstValue, operator, secondValue);
    }
  }
})