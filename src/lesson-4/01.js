const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue', 'tomato'];

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

let i1 = 0;
let i2 = 0;
let i3 = 0;

function changeColor1() {
  if (i1 === colors.length) {
    i1 = 0;
    text1.style.backgroundColor = colors[i1];
    i1++;
  } else {
    text1.style.backgroundColor = colors[i1];
    i1++;
  }
}

function changeColor2() {
  if (i2 === colors.length) {
    i2 = 0;
    text2.style.backgroundColor = colors[i2];
    i2++;
  } else {
    text2.style.backgroundColor = colors[i2];
    i2++;
  }
}

function changeColor3() {
  if (i3 === colors.length) {
    i3 = 0;
    text3.style.backgroundColor = colors[i3];
    i3++;
  } else {
    text3.style.backgroundColor = colors[i3];
    i3++;
  }
}

text1.addEventListener('click', changeColor1);
text2.addEventListener('click', changeColor2);
text3.addEventListener('click', changeColor3);

//Let's try to add new color
//Let's try to change color on backgroundColor
