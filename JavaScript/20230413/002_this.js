// this(***)

function a() {
  console.log(this);
}
a(); // window를 호출

function b() {
  console.log('hello world');
}
b();
window.b(); // window를 호출

let myObj = {
  val1: 100,
  func1: function () {
    console.log(this);
    // this가 누구일까?
    // console.log로 찍어보면 됩니다.
    // 1. func1
    // 2. myObj
    // 3. window
  },
};
myObj.func1(); // myObj를 호출

///////////////////////////////////

let test = myObj.func1;
test(); // window를 호출

///////////////////////////////////
// this가 어려운 이유는 this를 포함하고 있는 객체가 있는 위치에 따라 this의 의미가 달라지기 때문입니다.

function sayName() {
  console.log(this);
}

var c = {
  hello: 'world',
  say: sayName,
};

var b = {
  // var b = {c}
  c: c,
};

var a = {
  // var a = {b}
  b: b,
};

c.say(); // c
b.c.say(); // c
a.b.c.say(); // c

// 문제를 조금 더 꼬아보겠습니다.
function sayName() {
  console.log(this);
}

var c = {
  hello: 'world',
  say: sayName,
};

var b = {
  // var b = {c}
  c: c,
  say: sayName,
};

var a = {
  // var a = {b}
  b: b,
  say: sayName,
};

a.b.say(); // b
a.say(); // a
a.b.c.say(); // c

// 추가 예제
var name = 'gildong';
function sayName() {
  console.log(this.name);
}
// sayName(); // gildong

let peter = {
  name: 'Peter Parker',
  say: sayName,
};

let bruce = {
  name: 'Bruce Wayne',
  say: sayName,
};

peter.say(); // Peter Parker
bruce.say(); // Bruce Wayne

///////////////////////////////////
// 조금 더 다양한 예제

function attackBeam() {
  this.hp -= 20;
}

function attackKnife() {
  this.hp -= 5;
}

let zombie = {
  name: 'Busan Zombie',
  damaged1: attackBeam,
  damaged2: attackKnife,
  hp: 10000,
  power: 2,
};

let thanos = {
  name: 'Thanos',
  damaged: attackBeam,
  hp: 1000,
  power: 100,
};

zombie.damaged1(); // Beam
zombie.damaged2(); //Knife
zombie.hp;

///////////////////////////////////

let wolf = {
  name: 'Wolf',
  hp: 100,
  damaged: [attackBeam, attackKnife],
  hp: 100,
  power: 10,
};

// this 사용 예시
let 호텔 = [
  {
    이름: '하나호텔',
    위치: '제주도 제주시 001',
    가격: { A: 50000, B: 30000, C: 15000 },
    방의개수: 50,
    예약자수: 25,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: '둘호텔',
    위치: '제주도 제주시 002',
    가격: { A: 100000, B: 60000, C: 30000 },
    방의개수: 100,
    예약자수: 30,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: '셋호텔',
    위치: '제주도 제주시 003',
    가격: { A: 80000, B: 50000, C: 30000 },
    방의개수: 120,
    예약자수: 80,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());

///////////////////////////////////

// 추가 예제

function a() {
  console.log(this);
  function b() {
    console.log(this);
    function c() {
      console.log(this);
    }
    c();
  }
  b();
}
a();
// a, b, c 모두 window
// 위 함수는 a.b.c() 이런 식으로 호출한 객체를 타고 올라가는 형태가 아닙니다.
