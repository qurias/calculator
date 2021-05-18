let log = console.log;

let math_symbols = document.querySelectorAll('.math_symbol');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

math_symbols.forEach(e => {
 e.style.backgroundColor = changes_color();
});

function changes_color() {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * hex.length);
      hexColor += hex[randomNumber];
  };
  return hexColor;
};

let numeral = document.querySelector('.numeral');
let equally = document.querySelector('.equally');
let buttons_numeral = document.querySelectorAll('.button_numeral');

var value1 = '';
let value1_condition = true;
let value2 = '';
let value2_condition = false;
let test = document.querySelector('.test');
let math_symbol = '';


math_symbols.forEach((symbol) => {
  symbol.addEventListener('click', () => {
    math_symbol += symbol.textContent
    if (math_symbol === 'AC') {
      value1 = ''
      value2 = ''
      log(value1)
      log(value2)
    }
    if (math_symbol != '') {
      value1_condition = false
      value2_condition = true
    }
    numeral.innerHTML = ''
  })
})

buttons_numeral.forEach( (button) => {
  button.addEventListener('click', () => {
    if(value1_condition) {
      value1 += button.textContent
      numeral.innerHTML = value1
    }
    else if (value2_condition) {
      value2 += button.textContent
      numeral.innerHTML = value2
    }
  })
})

equally.addEventListener('click', () => {
  numeral.innerHTML = ''
  let a = parseInt(value1,10)
  let b = parseInt(value2,10)
  if (math_symbol == '+') {
    numeral.innerHTML = a + b
  }
  else if (math_symbol == '×') {
    numeral.innerHTML = a * b
  }
  else if (math_symbol == '÷') {
    numeral.innerHTML = a / b
  }
  else if (math_symbol == '-') {
    numeral.innerHTML = a - b
  }
})