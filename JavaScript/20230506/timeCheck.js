let start = Date.now();

const result = (x) => {
  console.log(`${x} 가 실행되는데 걸리는 시간 : ${Date.now() - start}`);
};

const blocking = () => {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  return console.log("blocking finished");
};

// blocking 함수를 promise로 감싸서 비동기식으로 만들어준다.
const asyncBlocking = () => {
  return new Promise((resolve, reject) => {
    let i = 0;
    while (i < 99999999) {
      i++;
    }
    resolve("promise blocking finished");
  });
};

result("동기식 코드1");
// 프로미스 객체를 만드는 과정은 동기적으로 진행됩니다!
// result(AsyncBlocking());

setTimeout(() => {
  result("setTimeout Finished");
}, 0);

result(
  asyncBlocking().then((txt) => {
    result(txt);
  })
);

result("동기식 코드2");
