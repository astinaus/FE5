const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.filter(function (el) {
    return el % 2 === 0;
}); // [2, 4, 6, 8, 10]

// 프로그래머스 lv_0 짝수의 합 구하기
// 정수 n이 주어질 때, n 이하의 짝수의 합을 구하라
function solution(n) {
    return Array(n) // 메서드 채이닝
        .fill() // 1
        .map((_, i) => i + 1) // 2
        .filter((v) => v % 2 === 0) // 3
        .reduce((a, c) => a + c, 0); // 4
}
// 이 코드를 설명해보면,
// 1. Array(n).fill()로 주어진 정수 n만큼의 길이를 가지는 배열에 빈값을 만든다.
// 2. 빈값들을 i+1 값으로 채운다.(index + 1) 여기서 언더바는 사용하지 않음을 명시해주는 용도다.
// 3. filter()로 조건에 맞는 새로운 배열을 생성한다.
// 4. filter()에 의해 생성된 배열의 값을 reduce(a, c)로 모두 더해 합을 구한다.

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2.filter(function (el) {
    return el % 2 !== 0;
});
[1, 3, 5, 7, 9];

// 모음 제거
Array.from("hello world")
    .filter((v) => !["a", "e", "i", "o", "u"])
    .includes(v);

// reduce
// 0을 항상 넣어주세요.
const arr3 = [1, 2, 3, 4, 5, 6];
arr3.reduce((a, c) => a + c, 0);

const arr4 = ["hello", "world", "lion"];

// includes
arr4.includes("world"); // true
arr4.includes("tiger"); // false
arr4.includes("hel"); // false

// join
arr4.join("!"); // 'hello!world!lion'

const arr5 = ["010", "1234", "5678"];
arr5.join("-"); // '010-5044-2903'

const arr6 = [010, 1234, 5678];
arr6.join("-"); // 이렇게 하시면 안됩니다.

// 0b100 // b는 binary의 첫글자입니다. (2진법)
// 0o100 // b는 octa의 첫글자입니다. (8진법)
// 0x100 // b는 hexa의 첫글자입니다. (16진법)
