// while(조건식) { 반복할 코드 }
// 조건식이 true일 때 반복할 코드를 실행합니다.
// 조건식이 false가 되면 반복문을 빠져나옵니다.
let x = 0;
while (x < 10) {
    console.log("start");
    console.log(x);
    x += 1;
    console.log("end");
}

let input;

do {
    input = prompt("숫자를 입력하세요.");
} while (isNaN(input));

console.log("입력한 숫자는 " + input + "입니다.");

do {
    input = confirm("다음에도 저희와 함께 하시겠습니까?");
} while (!input);

console.log("감사합니다.");

// 암기코드 1
// 구구단 for
for (let i = 2; i <= 9; i += 1) {
    for (let j = 1; j <= 9; j += 1) {
        console.log(`${i} X ${j} = ${i * j}`);
    }
}

// 구구단 while
let i = 2;
while (i <= 9) {
    let j = 1;
    while (j <= 9) {
        console.log(`${i} X ${j} = ${i * j}`);
        j += 1;
    }
    i += 1;
}

// 암기코드 2
// 문자열 뒤집기
// ex) "hello world" -> "dlrow olleh"
let str = "hello world";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
}
console.log(result);

for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
}
console.log(result);

while (count < s.length) {
    result = s[count] + result;
    count++;
}

console.log(result);

// 암기코드 3
// 팩토리얼
// 5! = 5 * 4 * 3 * 2 * 1
let n = 5;
let result2 = 1;
for (let i = 0; i < n; i++) {
    result2 *= i;
}
