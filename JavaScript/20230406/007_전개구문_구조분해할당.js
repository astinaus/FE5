// 전개구문
const 과일들 = ["사과", "파인애플", "수박"];
const 생선들 = ["연어", "고등어", "광어"];
const 합치면 = [...과일들, ...생선들];
const 합치면2 = [과일들, 생선들];

console.log(합치면);
console.log(합치면2);

// 객체의 전개구문
const 위니브1 = { 개리: 1, 빙키: 2 };
const 위니브2 = { 라이캣: 3 };
const 위니브3 = { ...위니브1, ...위니브2 };

console.log(위니브3);

const 위니브임직원 = {
    개리: "재직중",
    빙키: "재직중",
    라이캣: "재직중",
    뮤라: "재직중",
    해골왕: "재직중",
};

const 위니브임직원2 = {
    ...위니브임직원,
    라이캣: "휴가",
    해골왕: "퇴사",
};

const 위니브임직원3 = {
    ...위니브임직원,
};

위니브임직원;

// 구조분해할당

for (const [i, j] of [
    [1, 2],
    [3, 4],
    [5, 6],
]) {
    console.log(i, j);
}

Object.entries(위니브임직원);

for (const [i, j] of Object.entries(위니브임직원)) {
    console.log(i, j);
}

const test1 = [
    [1, 2, [10, 20]],
    [3, 4, [30, 40]],
    [5, 6, [50, 60]],
];

for (const [i, j, k] of test1) {
    console.log(i, j, k);
}

for (const [i, j, [k, l]] of test1) {
    console.log(i, j, k, l);
}

const test2 = [
    [1, 2, 10, 20],
    [3, 4, 30, 40],
    [5, 6, 50, 60],
];

for (const [i, j, ...k] of test2) {
    console.log(i, j, k);
}

////////////////////////
let [a, b] = [10, 20];
let [one, two, three] = "010-1234-5678".split("-");
let [one1, two2, ...three3] = "010-1234-5678-9123".split("-");
