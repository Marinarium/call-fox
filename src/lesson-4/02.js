const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

function changeColor() {
  let i = 0;
  return function (event) {
    event.target.style.color = colors[i];
    i++;
    if (i >= colors.length) {
      i = 0;
    }
  };
}

text1.addEventListener('click', changeColor());
text2.addEventListener('click', changeColor());
text3.addEventListener('click', changeColor());

// Let's imagine, we have 100 cards with text!!!

//https://learn.javascript.ru/obtaining-event-object
