// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC

'paullab CEO leehojun hello CEO';
// 문자열 1개만 매칭되어 변경
'paullab CEO leehojun hello CEO'.replace('CEO', 'CTO');
// flag로 global을 주어서 전체 변경(m-다중라인, i-대소문자 구분 안함, g-전체)
'paullab CEO leehojun hello CEO'.replace(/CEO/g, 'CTO');
// 패턴을 찾아 Array로 반환
'paullab CEO leehojun hello CEO'.match(/CEO/g);
// 패턴으로 Split
'paullab CEO leehojun hello CEO'
  .split(/CEO/g)(
    // 패턴의 유효성 검사 (true , false)
    /CEO/g
  )
  .test('paullab CEO leehojun hello CEO')(
    // true
    /CTO/g
  )
  .test('paullab CEO leehojun hello CEO'); // false

// 알고리즘 문제 풀이할 때 주의사항
// split을 하면 내가 원하는 갯수보다 1개가 더 추가되어 나온다.
'!a!abc!abcd'.split('!');
'!!!'.split('!'); // 4개
'!a!a!a'.split('!'); // 4개
'a!a!a!'.split('!'); // 4개

'!a!a!a'.split('!').length - 1;
// 전체 물음표 갯수 3개

// 3. 일반문자열
// / hello / g

// 4. 처음과 끝
// /^ hello / g
// / hello$ / g
// /^ hello$ / g

// 5. 모든문자 매핑(.)
// / hello / g
// / h.llo / g
// / hello..world / g

// 6. 모든문자 매핑
// / h[eao]llo / g

// 7. 범위
// / h[a - zA - Z0 - 9]llo / g

// 8. 부정
// / h[^ ae]llo / g

// 9. 그루핑 규칙
// / (on | ues | rida) / gm //: 그룹 1로 3개 중 매칭되는 패턴 찾음
// /(?:on|ues)/gm
// /(on|ues)|(rida)/gm : 그룹1(on|ues)과 그룹2(rida)로 각각 매칭되는 패턴 찾음
// /.(a | e | o)ll./ gm
// /hello (?!world)/gm : hello 뒤에 world가 오지 않는 것 (네거티브 매칭)
// /hello (?=world)/gm : hello 뒤에 world가 오는 것 (파지티브 매칭)

// 'hello hallo hello'
// .match(/.(a|e|o)ll./g)('hello hallo hello hello hi')
// .match(/.(a|e|o)ll./g)('hello hallo hello hello hi')
// .match(/.[eao]ll./g);

// 10. 수량자
/*
_* : 앞에 있는 문자가 0개 ~ N개
_+ : 앞에 있는 문자가 1개 ~ N개
_? : 앞에 있는 문자가 0개 ~ 1개

{3} : 3개
{3,} : 3개 이상
{1,3} : 1개 ~ 3개

_* : 앞에 있는 문자가 0개 ~ N개 ({0,})
_+ : 앞에 있는 문자가 1개 ~ N개({1,})
_? : 앞에 있는 문자가 0개 ~ 1개 ({0,1})

/[0-9]{3}[-.* ][0-9]{4}[-.* ][0-9]{4}/gm
/[0-9]{2,3}[-.* ]?[0-9]{3,5}[-.* ]?[0-9]{4}/gm
/[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]+/gm
*/

// 1번 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/120826
// 정규표현식 없이
function solution(my_string, letter) {
  return my_string.split(letter).join('');
}
// 오답 : 1개만 바꿉니다.
function solution(my_string, letter) {
  return my_string.replace(letter, '');
}

// 오답 : 정규표현식 패턴은 문자열로 만드는 것이 아니라 별도로 생성을 해주어야 합니다.
function solution(my_string, letter) {
  return my_string.replace(`/${letter}/g`, '');
}

// 정답
function solution(my_string, letter) {
  // new RegExp(패턴으로 사용할 문자열, 플래그)
  // replace에서만 사용되는 것이 아니라 정규표현식이 들어가는 곳 모두에서 사용할 수 있습니다.
  let reg = new RegExp(letter, 'g');
  return my_string.replace(reg, '');
}

// new RegExp('B', 'g') 이렇게 사용하시거나 my_string.replace(/B/g, '') 이렇게 사용하시면 됩니다.

// 2번 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/120851

// 정답 유형 1 : 숫자를 찾는다!
function solution(my_string) {
  return my_string.match(/[0-9]/g).reduce((a, b) => parseInt(a) + parseInt(b), 0);
  // my_string.match(/[0-9]/g).map(x => parseInt(x)).reduce((a, b) => a + b, 0)
}

// 정답 유형 2 : 문자를 제거한다!
function solution(my_string) {
  return my_string
    .replace(/[^0-9]/g, '')
    .split('')
    .reduce((a, b) => parseInt(a) + parseInt(b), 0);
}

// 3번 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/120851

// 오답 : null일때 length가 없습니다!
function solution(order) {
  return order.toString().match(/[369]/g).length;
}

// 정답
function solution(order) {
  let value = order.toString().match(/[369]/g) ?? [];
  return value.length;
}

function solution(order) {
  return (order.toString().match(/[369]/g) ?? []).length;
}

// 4번 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/120913
// 아래와 같이 풀 수 있지만 정규표현식을 사용하면 더 간단해집니다.
function solution(my_str, n) {
  let result = [];
  for (let i = 0; i < my_str.length; i += n) result.push(my_str.slice(i, i + n));
  return result;
}

function solution(my_str, n) {
  let reg = new RegExp(`.{1,${n}}`, 'g');
  return my_str.match(reg);
}

// 5번 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/120864
// 2번 문제 업그레이드
// 2번 문제 해답
function solution(my_string) {
  return my_string
    .replace(/[^0-9]/g, '')
    .split('')
    .reduce((a, b) => parseInt(a) + parseInt(b), 0);
}

// 5번 문제 해답
function solution(my_string) {
  return (my_string.match(/\d+/g) ?? []).reduce((a, b) => parseInt(a) + parseInt(b), 0);
}

////////////////// 그룹 연습문제 //////////////////
'gogaooogogooo'.match(/(go)/g); // ['go', 'go', 'go']
'gogaooogogooo'.match(/[go]/g); // ['g', 'o', 'g', 'o', 'o', 'o', 'g', 'o', 'g', 'o', 'o', 'o']

// 숫자 2자리와 알파벳 하나씩이 매칭되도록 다음의 패턴에서 문자열을 추출하시오.

// '87a99b00fww89e' => ['87a', '99b', '00f', '89e']
'87a99b00fww89e'.match(/[0-9][0-9][a-zA-Z]/g);
'87a99b00fww89e'.match(/([0-9][0-9])([a-zA-Z])/g); // 숫자 그룹과 문자 그룹으로 나눕니다.
'87a99b00fww89e'.match(/([0-9]{2})([a-zA-Z])/g);
'87a99b00fww89e'.match(/(\d{2})([a-zA-Z])/g);

// 6번 문제
// 링크 : https://jsalgo.co.kr/?page=2#
'a10b9r1ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g);
// ['r1', 'e3', 'v2', 'v1', 'v9']

// 아래처럼 r, e, v 뒤에 숫자가 10이 있을 경우 오답
'a10b9r10ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g);
// ['r1', 'e3', 'v2', 'v1', 'v9']

// 아래처럼 뽑으면 e가 33이 뽑히므로 오답
'a10b9r10ce33uab8wc918v2cv11v9'.match(/[rev]\d+/g);

// 정답
function solution(data) {
  let result = data
    .match(/([rev])(10|[0-9])/g)
    .reduce((acc, cur) => acc + parseInt(cur.slice(1)), 0)
    .toString();
  return `${result[0]}월 ${result[1]}일`;
}

// 보강 설명
// 한글 사용시, 콘솔에서 안될 수 있습니다.
const string = `hojun, lee
gildong, hong
hojung, choi
junho, lee`;

let result1 = string.replace(/(\w+), (\w+)/gm, '$2 $1');
console.log(result1);
let result3 = string.replace(/(\w+), (\w+)/gm, '$2_$1');
console.log(result3);
let result2 = string.replace(/(\w+), (\w+)/gm, '$1님 안녕하세요.');
console.log(result2);
let result4 = string.replace(/(\w+), (\w+)/gm, '$2 $1!!$1!!$1');
console.log(result4);
