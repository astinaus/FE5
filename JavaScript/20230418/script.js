// 웹페이지 좌측 클릭시 왼쪽으로 캐러셀이 회전.
// 우측 클릭시 오른쪽으로 캐러셀 회전
const btn = document.querySelectorAll('div');
const root = document.querySelector(':root');
const arrPic = ['./img/팬더.png', './img/알파카.png', './img/병아리.png', './img/수달.png', './img/햄스터.png', './img/카톡개.png', './img/토끼.png'];

arrPic.forEach((item) => {
  const list = document.querySelector('.list-item');
  const elLi = document.createElement('li');
  elLi.innerHTML = `<img src="${item}" alt="동물사진">`;

  list.appendChild(elLi);
});

const items = document.querySelectorAll('.list-item li');
const radius = (items[0].offsetWidth * items.length) / 3.14 / 2;

items.forEach((item, index) => {
  item.style.transform = `rotateY(${(360 / items.length) * index}deg) translateZ(${radius}px)`;
});

let angle = 0;

btn.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.id === 'left') {
      angle += 51.42;
    } else if (e.target.id === 'right') {
      angle -= 51.42;
    }
    root.style.setProperty('--angle', `${angle}deg`);
  });
});

/*
const center = document.querySelector('.list-item)
const items = document.querySelectorAll('.list-item li')
const angle = 360 / items.length
let curAngle = 0

document.addEventListener('click', (e) => {
  if (window.innerWidth / 2 < e.clientX) {
    curAngle += angle
  } else {
    curAngle -= angle
  }
  center.style.transform = `translate(-50%, -50%) rotateY(${curAngle}deg)`
})
*/
