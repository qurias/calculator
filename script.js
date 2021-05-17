let log = console.log

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

function changes_color() {
  let color = "#"
  let change_color = document.querySelectorAll("#math_symbol")
  for (let j = 0; j < 8; j++) {
    for (let i = 0; i < 6; i++) {
            let random = Math.floor(Math.random() * hex.length)
            color += hex[random];
    }
    color += "9d"
    change_color[j].style.backgroundColor = `${color}`;
    color = '#'
  }
}
changes_color()