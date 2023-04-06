let answer = ~~(Math.random() * 100) + 1; // 1 ~ 100 사이의 랜덤한 숫자를 생성한다.
let count = 0; // 시도 횟수를 저장할 변수

for (;;) {
    count++;
    let userInput = parseInt(prompt("값을 입력해주세요."));
    if (userInput === answer) {
        alert("정답입니다.");
        break;
    } else if (userInput > answer) {
        alert("입력한 값이 정답보다 큽니다.");
    } else {
        alert("입력한 값이 정답보다 작습니다.");
    }
}

console.log(`${count}번 만에 정답을 맞추셨습니다.}`);
