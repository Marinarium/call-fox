const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');
const text5 = document.getElementById('text5');
const text6 = document.getElementById('text6');
const text7 = document.getElementById('text7');
const text8 = document.getElementById('text8');
const text9 = document.getElementById('text9');
const text10 = document.getElementById('text10');
const text11 = document.getElementById('text11');
const text12 = document.getElementById('text12');
const text13 = document.getElementById('text13');
const text14 = document.getElementById('text14');
const text15 = document.getElementById('text15');
const text16 = document.getElementById('text16');
const text17 = document.getElementById('text17');
const text18 = document.getElementById('text18');
const text19 = document.getElementById('text19');
const text20 = document.getElementById('text20');
const text21 = document.getElementById('text21');
const text22 = document.getElementById('text22');
const text23 = document.getElementById('text23');
const text24 = document.getElementById('text24');
const text25 = document.getElementById('text25');
const text26 = document.getElementById('text26');
const text27 = document.getElementById('text27');
const text28 = document.getElementById('text28');
const text29 = document.getElementById('text29');
const text30 = document.getElementById('text30');
const text31 = document.getElementById('text31');
const text32 = document.getElementById('text32');
const text33 = document.getElementById('text33');
const text34 = document.getElementById('text34');
const text35 = document.getElementById('text35');
const text36 = document.getElementById('text36');
const text37 = document.getElementById('text37');
const text38 = document.getElementById('text38');
const text39 = document.getElementById('text39');

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
text4.addEventListener('click', changeColor());
text5.addEventListener('click', changeColor());
text6.addEventListener('click', changeColor());
text7.addEventListener('click', changeColor());
text8.addEventListener('click', changeColor());
text9.addEventListener('click', changeColor());
text10.addEventListener('click', changeColor());
text11.addEventListener('click', changeColor());
text12.addEventListener('click', changeColor());
text13.addEventListener('click', changeColor());
text14.addEventListener('click', changeColor());
text15.addEventListener('click', changeColor());
text16.addEventListener('click', changeColor());
text17.addEventListener('click', changeColor());
text18.addEventListener('click', changeColor());
text19.addEventListener('click', changeColor());
text20.addEventListener('click', changeColor());
text21.addEventListener('click', changeColor());
text22.addEventListener('click', changeColor());
text23.addEventListener('click', changeColor());
text24.addEventListener('click', changeColor());
text25.addEventListener('click', changeColor());
text26.addEventListener('click', changeColor());
text27.addEventListener('click', changeColor());
text28.addEventListener('click', changeColor());
text29.addEventListener('click', changeColor());
text30.addEventListener('click', changeColor());
text31.addEventListener('click', changeColor());
text32.addEventListener('click', changeColor());
text33.addEventListener('click', changeColor());
text34.addEventListener('click', changeColor());
text35.addEventListener('click', changeColor());
text36.addEventListener('click', changeColor());
text37.addEventListener('click', changeColor());
text38.addEventListener('click', changeColor());
text39.addEventListener('click', changeColor());

// Let's imagine, we have 100 cards with text!!!
