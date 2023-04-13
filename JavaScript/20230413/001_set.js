// 집합, 합집합, 교집합, 차집합
//  실무에서는 많이 사용이 안되지만 알고리즘 뭄ㄴ제에서는 거의 필수로 사용되는 자료형입니다.

let s = new Set('aabbbccccdd'); // 중복을 제거하는구나. {a, b, c, d}

회사게시판 = [
  '홍길동',
  '홍길동',
  '홍길동',
  '박무식',
  '박무식',
  '강호동',
  '유재석',
  '유재석',
  '유재석',
  '홍길동',
  '홍길동',
];

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요? (각각의 인원이 유일해야 합니다.)
let 작성자 = new Set(회사게시판);
작성자.size; // 4

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of 작성자) {
  console.log(i, 회사게시판.filter((e) => e === i).length);
}

// 이 풀이는 매우 어렵습니다. 초급자 분들에게 권장하지 않습니다.
let map = new Map();
for (const i of 회사게시판) {
  map.set(i, (map.get(i) || 0) + 1);
}

// set 연습

let ss = new Set('aaabbbbbccccccdd');
ss.size; // 4
ss.has('a'); // true
ss.has('f'); // false
ss.add('z'); // {a, b, c, d, z}

for (const i of ss) {
  console.log(i);
}

let ss1 = new Set('aabbbcccccdddd'.split(''));
let ss2 = new Set('a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'd', 'd', 'd');

// 교집합
let a = new Set('abc');
let b = new Set('cde');
let cro = [...a].filter((e) => b.has(e));

// 합집합
let union = new Set([...a].concat(...b));
let union2 = new Set([...a, ...b]);

// 차집합
let dif = [...a].filter((e) => !b.has(e));

// set, map, object, array가 이터러블 객체인지? 순서는 보장하는지?
// 이터러블한 객체란? 순회가 가능한 객체다.
// set, map, array, string

// 순서를 보장하나요? (object는 순서를 보장하지 않습니다.)
// set, map, array, string
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set
// https://myung-ho.tistory.com/90

// https://school.programmers.co.kr/learn/courses/30/lessons/120903
// 배열의 유사도
function solution(s1, s2) {
  return s1.length + s2.length - new Set([...s1, ...s2]).size;
}

function solution(s1, s2) {
  s1 = new Set(s1);
  s2 = new Set(s2);
  return [...s1].filter((e) => s2.has(e)).length;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120891?language=javascript
// 369 게임
function solution(order) {
  const mySet = new Set([3, 6, 9]);
  return String(order)
    .split('')
    .filter((num) => mySet.has(parseInt(num))).length;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120852
// 소인수분해
function solution(n) {
  let answer = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      answer.push(i);
      n /= i;
    }
  }

  return [...new Set(answer)].sort((a, b) => a - b);
}
