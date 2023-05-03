const article = document.querySelector(".popup");
const openBtn = document.querySelector(".btn-open");
const closeBtn = document.querySelector(".btn-close");
const dim = document.querySelector(".dim");

// 첫번째 포커스 요소
const firstEl = article.querySelector("a");

function openPopup() {
  article.classList.add("active");
  firstEl.focus();
}

function closePopup() {
  article.classList.remove("active");
}

openBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
closeBtn.addEventListener("keydown", function (e) {
  if (!e.shiftKey && e.key === "Tab") {
    e.preventDefault();
    firstEl.focus();
  }
});

firstEl.addEventListener("keydown", function (e) {
  if (e.shiftKey && e.key === "Tab") {
    e.preventDefault();
    closeBtn.focus();
  }
});

// article 요소 밖을 클릭하면 팝업이 닫히도록
dim.addEventListener("click", closePopup);

// esc키 누르면 팝업이 닫히도록
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closePopup();
  }
});
