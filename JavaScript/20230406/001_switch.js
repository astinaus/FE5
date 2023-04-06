const value = "two";

switch (value) {
    case "one":
        console.log("hello one");
        break;
    case "two":
        console.log("hello two");
        break;
    case "three":
        console.log("hello three");
        break;
    default:
        console.log("hello default");
        break;
} // hello two

const value2 = "four";

switch (value2) {
    case "one":
        console.log("hello one");
        break;
    case "two":
        console.log("hello two");
        break;
    case "three":
        console.log("hello three");
        break;
    default:
        console.log("hello default");
        break;
} // default

switch (new Date().getDay()) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("월요일");
        break;
    case 2:
        console.log("화요일");
        break;
    case 3:
        console.log("수요일");
        break;
    case 4:
        console.log("목요일");
        break;
    case 5:
        console.log("금요일");
        break;
    case 6:
        console.log("토요일");
        break;
    // default는 견고한 코드를 위해서 작성해주시는 편이 좋습니다.
} // 목요일

// switch문이 없는 다른 언어에서는 어떤식으로 처리할까요?
const day = new Date().getDay();
const dayObj = {
    0: "일요일",
    1: "월요일",
    2: "화요일",
    3: "수요일",
    4: "목요일",
    5: "금요일",
    6: "토요일",
};

console.log(dayObj[day]); // 목요일

// default를 처리하는 방법
// 1. 단락평가
console.log(dayObj[day] || "요일이 올바르지 않습니다."); // 목요일

// 2. 삼항연산자
console.log(dayObj[day] ? dayObj[day] : "요일이 올바르지 않습니다."); // 목요일

// 3. nullish
console.log(dayObj[day] ?? "요일이 올바르지 않습니다."); // 목요일
