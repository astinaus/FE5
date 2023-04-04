// arr *****
const arr = [10, 20, 30];
arr[0] = 100; // mutable : 변경가능
console.log(arr); // [100, 20, 30]
// const는 값이 변하지 않는 상수인데 어떻게 값이 변했는가?
// -> arr이 가르키고 있는 주소는 바뀔 수 없습니다. 메모리 주소에 저장된 값이 변경되는 것입니다.
// 값이 변한다는 개념이 메모리 주소의 변경이라는 점을 기억하세요.
// arr = 100 // 안됩니다.
// arr = [40, 50, 60] // 안됩니다.

console.dir(arr); // 배열의 프로퍼티와 메서드를 확인할 수 있습니다.

// 문자열(string)
const s = "hello world";
console.log(s[0]);
s[0] = "i"; // 안됩니다. immutable : 불변

// arr.1 // error
// 숫자로 들어간 값은 대괄호로 호출할 수 있고
// 문자로 입력된 값은 .을 찍어서 호출할 수 있습니다.
// length는 문자입니다.
arr[0];
arr.length;
arr["length"];

// 아래 두 개가 같은 이야기입니다. 배열의 값을 수정하는 것입니다.
arr.length = 10;
arr[0] = 100;

// 프로퍼티를 추가하는 것도 가능합니다.
arr["anonymous"] = 100;
arr.anonymous2 = 10;

// 배열의 특징
// let arr = [];
// let arr = [1, 2, 3];
// let arr2 = new Array(4, 5, 6);
// let arr2 = new Array(3);
// Array(100).fill(0) // 100개의 index를 가진 배열을 만들고(length = 100) 값을 0 으로 채우라는 뜻입니다.

// 1. 배열은 순서가 있습니다. 배열의 순서를 index, 이 순서대로 호출하는 것을 indexing이라고 합니다.
// 배열 안의 값을 원소(elements)라고 합니다.
const arr = [10, 20, 30];
arr[0] = 100;

// 2. 배열에 다른 원시타입과 객체타입을 포함할 수 있습니다.
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

arr[0]; // [1, 2, 3]
arr[1]; // [4, 5, 6]
arr[2]; // [7, 8, 9]
// 6을 출력하고 싶다면?
arr[1][2]; // 6
// 2차원 배열은 행렬(매트릭스)라고 불립니다.

// 0차원, 1차원, 2차원, 3차원, 다차원
const a = 10; // 스칼라
const b = [10, 20, 30]; // 벡터
const c = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]; // 매트릭스
const d = [
    [
        [1, 2],
        [3, 4],
        [5, 6],
    ],
    [
        [1, 2],
        [3, 4],
        [5, 6],
    ],
    [
        [1, 2],
        [3, 4],
        [5, 6],
    ],
]; // 텐서(3차원 이상의 다차원)
// 가장 유명한 인공지능 라이브러리인 텐서플로우는 텐서를 이용한 다차원 행렬의 연산입니다.

// push
const arr = [1, 2, 3];
arr.push(4);

// push 실무 예제
// let tableBodyData = []
// for (const iterator of data) {
//     tableBodyData.push(`
//             <tr>
//                 <td>${iterator["a"]}</td>
//                 <td>${iterator["b"]}</td>
//                 <td>${iterator["c"]}</td>
//                 <td>${iterator["d"]}</td>
//                 <td>${iterator["e"]}</td>
//                 <td>${iterator["f"]}</td>
//             </tr>
//         `);
// }
// document.querySelector("#dataTable > tbody").innerHTML = tableBodyData.join("");
const arr = [1, 2, 3, 4, 5];
arr.pop();
// 1. 마지막에서 값을 꺼내고
// 2. 꺼낸 값을 반환(return) 합니다.
// 5
arr;
// (4) [1, 2, 3, 4]

// pop
const arr = [1, 2, 3, 4, 5];
let lastValue = arr.pop();
arr;

// unshift
const myArray1 = ["사과", "바나나", "수박"];
myArray1.unshift("오이", "배");
console.log(myArray1);

// shift
// 1. 앞에서 값을 꺼내고
// 2. 꺼낸 값을 반환(return) 합니다.
const myArray2 = ["사과", "바나나", "수박"];
// myArray2.shift();
// console.log(myArray2);

let firstValue = myArray2.shift();
firstValue;
// 사과

// 정리
// pop() : 배열의 마지막 요소의 값을 꺼내고 그 값을 반환.
// push() : 배열의 마지막에 요소를 추가한다.
// shift() : 배열의 첫번째 요소의 값을 꺼내고 그 값을 반환.
// unshift() : 배열의 처음에 요소를 추가한다.

// arr.splice(start, deleteCount, items)
const arr = [1, 2, 3];
arr.splice(1, 0, 4); // ('arr의 1번째에', '아무것도 삭제하지 않고(0)', '4를 넣겠다.')

const arr = [1, 2, 3];
arr.splice(1, 0, [10, 20, 30]); // ('arr의 1번째에', '아무것도 삭제하지 않고(0)', '[10, 20, 30]을 넣겠다.')

const arr = [1, 2, 3];
arr.splice(1, 0, ...[10, 20, 30]); // ('arr의 1번째에', '아무것도 삭제하지 않고(0)', '10, 20, 30을 넣겠다.')

const arr = [1, 2, 3];
arr.splice(1, 0, 10, 20, 30); // ('arr의 1번째에', '아무것도 삭제하지 않고(0)', '10, 20, 30을 넣겠다.')

// 만들고 싶은 값 : [10, 1, 2, 3, 20, 30, 1, 2, 3, 40, 50]
const arr = [10, 20, 30, 40, 50];
const x = [1, 2, 3];
arr.splice(1, 0, ...x);
arr.splice(6, 0, ...x);
arr; // [10, 1, 2, 3, 20, 30, 1, 2, 3, 40, 50]

// splice로 삭제
const arr = [10, 20, 30, 40, 50];
arr.splice(2, 1, 5);
arr; // [10, 20, 5, 40, 50]
// splice가 메서드 체이닝이 의도한대로 안되는 이유 : splice는 배열이 아니라, 삭제된 값을 반환하기 때문입니다.

const arr = [10, 20, 30, 40, 50];
arr.splice(2, 2); // [10, 20, 50]
// 배열의 2번째 위치에서 2개의 값을 삭제합니다. 삽입되는 값은 없습니다.

const arr = [10, 20, 30, 40, 50];
arr.splice(1); // [10]
// 배열의 1번째 위치 뒤의 값을 다 삭제합니다.

// arr.slice(start, end)
const myArray = ["apple", "banana", "cherry", "durian", "elderberry"];
console.log(myArray.slice(1, 4)); // ["banana", "cherry", "durian"]
console.log(myArray.slice(1)); // ["banana", "cherry", "durian", "elderberry"]
console.log(myArray.slice(0, 100)); // ["apple", "banana", "cherry", "durian", "elderberry"]
console.log(myArray); // ["apple", "banana", "cherry", "durian", "elderberry"]
// slice는 원본을 변경하지 않습니다.
// slice는 start값부터 end값 직전의 값까지 잘라냅니다.

//////////////////////

// arr.forEach() 배열의 각 요소에 대해 주어진 함수를 실행합니다.
const arr = [1, 2, 3, 4, 5];
// arr.forEach(함수)
// 함수(callbackfn): (value: number, index: number, array: number[])

arr.forEach(function (item, index) {
    console.log(index, item);
});

arr.forEach(function (item, index) {
    console.log(index, item);
    console.log("hello");
    console.log("world");
});

arr.forEach(function (item, index, arr) {
    console.log(index, item, arr);
    console.log("hello");
    console.log("world");
});

//////////////

const arr = Array(100).fill(0);
const arr2 = [];

// 실무에서 사용하는 코드는 아닙니다.
// arr.forEach(function(item, index) {
//     arr2.push(index)
// })

// 같은 코드1(이름이 없는 함수 사용)
// arr.forEach(function(item, index) {
//     arr2.push(index+1)
// })

// 주로 이렇게 실무에서 사용합니다.
// 같은 코드2(화살표 함수 사용)
arr.forEach((item, index) => {
    arr2.push(index + 1);
});
// 같은 코드3(화살표 함수 중괄호 생략)
arr.forEach((item, index) => arr2.push(index + 1));

// 같은 코드4(이렇게는 사용하지 않습니다.)
function anonymous(item, index) {
    arr2.push(index + 1);
}
arr.forEach(anonymous());

// 어제 진행했었던 코드
fetch("http://test.api.weniv.co.kr/mall")
    .then((data) => data.json())
    .then((data) => {
        data.forEach((item) => {
            console.log(item.thumbnailImg);
            console.log(item.productName);
            console.log(item.price);
        });
    });

// https://caniuse.com/?search=forEach
// nodeList에서 forEach와 Array에서 forEach는 다릅니다.
// nodeList에서 forEach는 익스플로러를 지원하지 않습니다.

const avengers = ["spiderman", "ironman", "hulk", "thor"];

const newAvengers = [];
avengers.forEach(function (item) {
    newAvengers.push("💖" + item + "💖");
});
console.log(newAvengers);

// map (면접 질문에서도 많이 나옵니다. 데이터를 뽑으려고 많이 사용합니다.)
// map은 forEach와는 다르게 새로운 배열을 생성합니다.
const arr = [1, 2, 3];
arr.map(function (item, index) {
    return item ** 2;
});

const arr = [1, 2, 3];
arr.map(function (x) {
    return x ** 2;
});

arr.map((x) => x ** 2);

// 같은 코드 1
const arr = Array(100).fill(0);
arr.map((v, i) => i);

// 같은 코드 2
const arr = Array(100).fill(0);
arr.map(function (v, i) {
    return i;
});

// 같은 코드 3
const arr = Array(100).fill(0);
function astin(v, i) {
    return i;
}
arr.map(astin);

// 같은 코드 4
const arr = Array(100).fill(0);
arr.map((v, i) => {
    return i;
});

// 실무 팁(***)
let tip1 = [1, 2, 3, 4, 5];
console.log([...tip1].pop()); // 전개구문 [...array] 대괄호가 사라집니다.
// 원본 수정 없이 [1, 2, 3, 4] 값과 [5]값을 얻고 싶을 때
let tip2 = [...tip1];
console.log(tip2.pop());
console.log(tip2);

let tip3 = [1, 2, 3, 4, 5];
let tip4 = [10, 20, 30, 40, 50];

console.log([...tip3, 1000, ...tip4]);

const tip5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// 다차원 배열에서 최솟값, 최댓값 찾기
Math.max(...tip5.flat()); // flat() 다차원 배열을 평평하게(flat하게) 만들어 줍니다.
// 박스가 펼쳐진다는 느낌입니다.
const tip6 = [
    [
        [1, 2],
        [3, 4],
        [5, 6],
    ],
    [
        [1, 2],
        [3, 4],
        [5, 6],
    ],
    [
        [1, 2],
        [3, 4],
        [5, 6],
    ],
];

tip6.flat();
tip6.flat(1);
tip6.flat(2);
tip6.flat(Infinity); // 다 펼쳐지면 스톱

const tip7 = new Array(10).fill(0); // Array(10).fill(0)도 됩니다.
const tip8 = Array.from("hello world");

// '.'.repeat(100).split('.') // 권하지는 않습니다.

let tip9 = [1, 2, 3, 4, 5];
console.log([tip9.slice(0, 2), 1000, tip9.slice(2, 5)]);
console.log([...tip9.slice(0, 2), 1000, ...tip9.slice(2, 5)]);

let tip10 = [1, 2, 3, 4, 5];
tip10.splice(2, 0, 1000);

// map
const tip11 = Array(100)
    .fill(0)
    .map((v, i) => i + 1);

const tip12 = [
    {
        _id: "642ba3980785cecff3f39a8d",
        index: 0,
        age: 28,
        eyeColor: "green",
        name: "Annette Middleton",
        gender: "female",
        company: "KINETICA",
    },
    {
        _id: "642ba398d0fed6e17f2f50c9",
        index: 1,
        age: 37,
        eyeColor: "green",
        name: "Kidd Roman",
        gender: "male",
        company: "AUSTECH",
    },
    {
        _id: "642ba39827d809511d00dd8d",
        index: 2,
        age: 39,
        eyeColor: "brown",
        name: "Best Ratliff",
        gender: "male",
        company: "PRISMATIC",
    },
];

const ages = tip12.map((item) => item.age);
const ages2 = tip12.map((item) => {
    return item.age;
});
let average = 0;
ages.map((item) => {
    average += item;
});
average = average / parseInt(ages.length);
console.log(parseInt(average));
