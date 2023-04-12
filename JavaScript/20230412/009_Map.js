let m = new Map();

// Map에 값을 넣기
m.set("하나", 1);
m.set(1, "하나");
m.set(true, 1);
m.set(false, 0);

// Map 값에 접근하기
m.get("하나"); // 1

// {[1, 2, 3]: 100, {'하나': 1}: 10} // error
// m.set([1, 2, 3], "리얼리?");
// m.get([1, 2, 3]); // undefined

let x = [1, 2, 3, 4];
m.set(x, "리얼리?");
m.get(x); // '리얼리?'

// Map에 값이 있는지 확인하기
m.has("하나"); // true

// Map에 값 삭제하기
m.delete("하나"); // true
m.has("하나"); // false
m;

// Map의 크기를 확인하기
m.size;

//////////////////
const data = new Map().set("name", "lee").set("age", 20).set("height", 180);

//////////////////
let data1 = new Map([
  ["one", 1],
  ["two", 2],
]); // O
let data2 = new Map(Object.entries({ one: 1, two: 2 })); // O
// let data = new Map({ one: 1, two: 2 }); // X
// let data = new Map('hello world') // X
// let data = new Map([10, 20, 30, 40]) // X

// 직접 순회가 가능하지 않은 Object!
let data3 = { one: 1, two: 2 };
for (const i of data3) {
  // X 작동되지 않습니다!
  console.log(i);
}

let data4 = { one: 1, two: 2 };
for (const i of Object.entries(data4)) {
  console.log(i);
}

// 직접 순회가 가능한 Map!
let m1 = new Map();

m1.set("하나", 1) // 메서드 체이닝
  .set("둘", 2)
  .set("셋", 3)
  .set("넷", 4);

for (const i of m1) {
  console.log(i);
}

for (const [key, value] of m1) {
  console.log(key, value);
}

let test = { one: 1, two: 2 };
Object.keys(test);

// Map은 메서드로 모두 호출 가능!
m1.keys();
m1.values();
m1.entries();

// Map -> Object 간의 형변환
let 맵 = new Map(Object.entries({ one: 1, two: 2 }));
let 오브젝트 = Object.fromEntries(맵);

// 키 값의 중복이 안됩니다.
let map = new Map();
map.set("one", 1);
map.set("one", 2);
map.set("one", 3);

// Map 과 Object 의 차이
// Object의 키는 문자열 타입으로만 지정해야 하지만 Map은 모든 타입의 키를 사용할 수 있습니다.
// Object는 크기를 사용자가 직접 수동으로 알아내야 하지만, Map은 size 프로퍼티를 사용하여 크기를 쉽게 얻을 수 있습니다.
// Map은 데이터를 추가하거나 제거하는 작업에서 Object보다 더 나은 성능을 보입니다.
