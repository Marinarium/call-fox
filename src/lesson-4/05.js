const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const textWrapper = document.getElementById('wrapper');

textWrapper.addEventListener('click', changeColor);

function changeColor() {
  const currentColor = event.target.style.color;
  let colorIndex = colors.indexOf(currentColor);

  if (currentColor && colorIndex !== colors.length - 1) {
    event.target.style.color = colors[++colorIndex];
  } else {
    colorIndex = 0;
    event.target.style.color = colors[colorIndex];
  }
}

// https://learn.javascript.ru/event-delegation
