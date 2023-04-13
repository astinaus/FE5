// - JSON.parse() : JSON 문자열을 JavaScript 객체로 변환합니다. (문자열 => 객체)
// - JSON.stringify() : JavaScript 객체를 JSON 문자열로 변환합니다. (객체 => 문자열)

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj);

const json2 = '[1, 2, 3]';
const obj2 = JSON.parse(json2);
console.log(obj2);

const json3 = '[1, 2, [1, 2, 3]]';
const obj3 = JSON.parse(json3);
console.log(obj3);

const s = JSON.stringify(json);
console.log(s);

// 깊은 복사
let l = [10, 20, 30];
let a = JSON.parse(JSON.stringify(l));
a[0] = 1000;

console.log(l);

// error
let a2 = JSON.parse(`${l}`);
a[0] = 1000;

console.log(l);
