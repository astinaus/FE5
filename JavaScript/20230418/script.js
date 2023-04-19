// 웹페이지 좌측 클릭시 왼쪽으로 캐러셀이 회전.
// 우측 클릭시 오른쪽으로 캐러셀 회전
const btn = document.querySelectorAll('div');
const root = document.querySelector(':root');

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
