// async function message() {
//   let hello = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("hello");
//     }, 100);
//   });

//   let world = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("world");
//     }, 100);
//   });

//   console.log(`${hello} ${world}`);
// }

// function messagePromise() {
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("hello");
//     }, 100);
//   }).then((result) => {
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(result + " world");
//       }, 100);
//     }).then((message) => {
//       console.log(message);
//     });
//   });
// }

// function messagePromiseAll() {
//   Promise.all([
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("hello");
//       }, 100);
//     }),
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("world");
//       }, 100);
//     }),
//   ]).then((resultArray) => {
//     console.log(resultArray.join(" "));
//   });
// }

async function asyncMessagePromiseAll() {
  const [hello, world] = await Promise.all([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("hello");
      }, 100);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("world");
      }, 100);
    }),
  ]);

  console.log(`${hello} ${world}`);
}

// message();
// messagePromise();
// console.log("i am sync !!!");

// messagePromiseAll();
asyncMessagePromiseAll();
