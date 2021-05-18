const log = console.log;
const math_symbols = document.querySelectorAll('.math_symbol');
const numeral = document.querySelector('.display');
const buttons_numeral = document.querySelectorAll('.calc_btn');
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

buttons_numeral.forEach(symbol => {
  let current = symbol.getAttribute('value');
  symbol.addEventListener('click', () => {
    if (current === 'c') {
      numeral.innerHTML = '';
    } else if (current === '=') {
      numeral.innerHTML = eval(numeral.innerHTML);
    } else {
      numeral.innerHTML += current;
    }
  });
});