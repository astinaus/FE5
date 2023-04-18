// 웹페이지 좌측 클릭시 왼쪽으로 캐러셀이 회전.
// 우측 클릭시 오른쪽으로 캐러셀 회전
const listItem = document.querySelector('.list-item');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const root = document.querySelector(':root');

let angle = 0;

left.addEventListener('click', leftClick);
right.addEventListener('click', rightClick);

function leftClick() {
  angle += 51.42;
  root.style.setProperty('--angle', `${angle}deg`);
}

function rightClick() {
  angle -= 51.42;
  root.style.setProperty('--angle', `${angle}deg`);
}
