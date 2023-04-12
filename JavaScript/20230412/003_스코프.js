// let과 const는 블록 레벨 스코프
// 변수에 접근할 수 있는 유효범위
// 전역 스코프
// 함수 스코프
// 블록 스코프 (ES6)
{
  let x = 10;
  const y = 20;
}
console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined

// 지역변수와 전역변수
let x = 100; // 블록 밖에 선언하시면 전역에서 접근할 수 있는 변수가 됩니다. 이를 전역변수라고 합니다.
function 함수() {
  let y = 20; // 블록 안에 선언하시면 함수 안에서만 접근할 수 있는 변수가 됩니다. 이를 지역변수라고 합니다.
  console.log(x); // 스코프 체이닝 (해당 영역에 변수가 없으면 스코프 체인을 따라 계속해서 상위 스코프를 탐색합니다. 전역까지 탑색했는데도 변수가 없다면 ReferenceError가 발생합니다.)
}
함수(); // 100
console.log(y); // ReferenceError: y is not defined 블록 밖에서 접근할 수 없습니다.

let z = 10;
function 함수1() {
  let z = 20;
  function 함수2() {
    let z = 30;
    function 함수3() {
      console.log(z);
    }
    함수3();
  }
  함수2();
}
함수1();
console.log(z);

//
let a = 10;
let b = 10;
function 함수1() {
  let a = 20;
  let b = 20;
  function 함수2() {
    let a = 30;
    console.log(a, b);
  }
  함수2();
}
함수1();

// 함수의 호이스팅(함수나 변수를 끌어올려 주는 것)
// 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미
// error 없이 실행됩니다.
함수(10);

function 함수(x) {
  return x + 100;
}

// error가 발생합니다.
함수(10); // ReferenceError: 함수 is not defined

let 함수 = (x) => x + 100;

// error가 발생합니다.
함수(10); // ReferenceError: 함수 is not defined

const 함수 = function (x) {
  return x + 100;
};
