for (let i = 0; i < 10; i++) {
  console.log(10);
}

let arr = [10, 20, 30, 40, 50];
for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// IE에서도 사용 가능
let arr1 = [10, 20, 30, 40, 50];
let obj1 = {
  one: 10,
  two: 20,
};
for (const i in arr) {
  console.log(arr1[i]); // index를 가져온다!?
}

for (const i in obj1) {
  console.log(obj1[i]); // key를 가져온다!?
}

// 1 ~ 100까지의 합
let s = 0;
for (const i in ".".repeat(101)) {
  s += parseInt(i);
}
console.log(s);

// IE에서는 사용 불가
// 개발자의 행복을 위해서 IE를 버리자 => 이렇게 해야만 사용할 수 있습니다.
let arr2 = [10, 20, 30, 40, 50];
let obj2 = {
  one: 10,
  two: 20,
};
for (const item of arr2) {
  console.log(item); // value를 가져온다!?
}

let ss = 0;
for (const item of arr2) {
  ss += item;
} // ss = 150

for (const item of Object.values(obj2)) {
  // of 뒤에 iterable한 객체가 나와야 합니다.
  console.log(item); // value를 가져온다!?
}

// 문제
// https://codingdojang.com/scode/408?answer_mode=hide
// 1차원의 점들이 주어졌을 때, 그 중 거리가 가장 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단, 점들의 배열은 모두 정렬되어 있다고 가정합니다.)
// 예를 들어 S = {1, 3, 4, 7, 8, 13, 17, 20}이 주어졌다면 결과값은 {3, 4}가 될 수 있습니다.
let S = [1, 3, 4, 7, 8, 13, 17, 20];
function solution(S) {
  let min = Infinity;
  let result = [];
  for (let i = 0; i < S.length; i++) {
    if (i == S.length - 1) {
      break;
    }
    let diff = S[i + 1] - S[i];
    if (diff < min) {
      min = diff;
      result = [S[i], S[i + 1]];
    }
  }
  return result;
}

// 위보다 깔끔한 코드가 나오지는 않습니다.
for (const i in S) {
  if (i == S.length - 1) {
    break;
  }
  let diff = S[parseInt(i) + 1] - S[i];
  if (diff < min) {
    min = diff;
    result = [S[i], S[i + 1]];
  }
}

// 문제
// 다음 수학 점수의 반 평균을 구하세요.
let mathScores = [10, 99, 89, 70];
// step1
(mathScores[0] + mathScores[1] + mathScores[2] + mathScores[3]) /
  mathScores.length;
// step2
let sum = 0;
for (let i = 0; i < mathScores.length; i++) {
  sum += mathScores[i];
}
console.log(sum / mathScores.length);

// 문제
// 다음 user의 나이 평균을 구하세요.
let user = [
  {
    _id: "642e3071c61a23c70ae6076b",
    index: 0,
    age: 31,
    name: "Hicks Garza",
    gender: "male",
  },
  {
    _id: "642e3071ecd6f90a87d64731",
    index: 1,
    age: 32,
    name: "Ayers Harrington",
    gender: "male",
  },
  {
    _id: "642e3071cef9ddc131f047fb",
    index: 2,
    age: 39,
    name: "Lamb Adams",
    gender: "male",
  },
];
let ageSum = 0;
for (let i = 0; i < user.length; i++) {
  ageSum += parseInt(user[i].age);
}
console.log(ageSum / user.length);

// for of 문 사용
for (const item of user) {
  ageSum += parseInt(item.age);
}
console.log(ageSum / user.length);

// for in 문 사용
for (const i in user) {
  ageSum += parseInt(user[i].age);
}
console.log(ageSum / user.length);

// age가 입력되지 않았을 경우 예외처리
for (const item of user) {
  if (item.age) {
    ageSum += parseInt(item.age);
  }
}
console.log(Math.floor(ageSum / user.length));
console.log((ageSum / user.length).toFixed(2));

/////

for (const i in user) {
  ageSum += parseInt(user[i].age);
}
console.log((sss / user.length).toFixed(2));

// why? for of와 for in문에서는 const가 가능한가요?
// 한국어 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of#%EB%AA%85%EC%84%B8%EC%84%9C
// 영어 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// ECMAScript 명세서 : https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements
// https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-LetOrConst
for (const i = 0; i < 10; i++) {
  console.log(10);
} // error

{
  const x = 10;
  console.log(x);
}
console.log(x);

for (const i in [1, 2, 3]) {
  console.log(i);
}

for (const i of [1, 2, 3]) {
  console.log(i);
}

///// 심화내용
// 지금 당장은 몰라도 되는 내용들 입니다.

let ssss = 0;
for (const i of user) {
  console.log(i);
  console.log(i.age);
  console.log(s);
  console.log("----------");
  s += i.age;
}
console.log((s / user.length).toFixed(2));

/////// 외우세요. ///////

user
  .map((v) => v.age)
  .filter((v) => !!v)
  .reduce((a, b) => a + b, 0) / user.length;
