// let - var 
// const - constant



/* if(true){
    var a = 'Hello World!';
}

console.log(a); */




//Scope

// console.log(b);

// var b = 15; 

//Hoisting


// Array and Object (const)



// Spread

// const arr1 = [1, 2, 4, 6];
// const arr2 = [24, 1, 42, 72]; 

// const arr12 = Array.prototype.push.apply(arr1, arr2);

// console.log([...arr1, ...arr2]); 

/** */

// const obj1 = {
//     n1: 'Hello',
//     n2: 'World'
// };

// const obj2 = {
//     n1: 'By'
// }

// var obj12 = Object.assign(obj1, obj2);

// let objEs6 = {
//     ...obj1, 
//     ...obj2
// }

// console.log(obj12);
// console.log(objEs6) 

/** */

// const arrNext = [4, 12, 2];

// function sum(a,b,c){
//     return (a+b)/c;
// } 

//  console.log(sum(arrNext[0], arrNext[1], arrNext[2]));
//  console.log(sum.apply(null, arrNext));
//  console.log(sum(...arrNext)); 



 //REST

//  function output(val1, val2, ...REST){
//     console.log(val1, val2,  REST);
//  }

//  output(15, 12, 12, 1, -1, 2.5, 24, 'sdfsfd'); 


 const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

//All Operators
 const allCalculation = {
  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,

  '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

  '**': (firstOperand, secondOperand) => firstOperand ** secondOperand,

  '%': (firstOperand, secondOperand) => firstOperand % secondOperand,

  '=': (firstOperand, secondOperand) => secondOperand,

  'n!': (firstOperand, secondOperand) => factorial(firstOperand)
};
      
function factorial(firstOperand) {
    return firstOperand ? firstOperand * factorial(firstOperand - 1) : 1;
}


function inputOperand(ourOperand) {
  const {
      displayValue,
      waitingForSecondOperand
  } = calculator;

  if (waitingForSecondOperand === true) {
      calculator.displayValue = ourOperand;
      calculator.waitingForSecondOperand = false;
  } else {
      calculator.displayValue = displayValue === '0' ? ourOperand : displayValue + ourOperand;
  }

  console.log(calculator);
}

function handleOperator(nextOperator) {
  const {
      firstOperand,
      displayValue,
      operator
  } = calculator
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand) {
      calculator.operator = nextOperator;
      console.log(calculator);
      return;
  }

  if (firstOperand == null) {
      calculator.firstOperand = inputValue;
  } else if (operator) {
      const currentValue = firstOperand || 0;
      const result = allCalculation[operator](currentValue, inputValue);

      calculator.displayValue = String(result);
      calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
}

function updateDisplay() {
  const display = document.querySelector('.calc_all');
  display.value = calculator.displayValue;
}

updateDisplay();

function clearValue() {
    calculator.displayValue = "0";
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
  }


const keys = document.querySelector('.calc_keys');
keys.addEventListener('click', (event) => {
  const {
      target
  } = event;
  if (!target.matches('button')) {
      return;
  }


  if (target.classList.contains('operator')) {
      handleOperator(target.value);
      updateDisplay();
      return;
  }


  if(target.classList.contains('funoperator')) {
    handleOperator(target.value);
    calculator.waitingForSecondOperand = false;
    updateDisplay();
    return;
  }

  if (target.classList.contains('clear')) {
    clearValue();
    updateDisplay();
    return;
 }
  inputOperand(target.value);
  updateDisplay();
}); 