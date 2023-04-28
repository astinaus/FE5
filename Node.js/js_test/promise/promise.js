// 1.pending 2.fulfilled 3.rejected
function sayHello() {
  return new Promise((resolve, reject) => {
    const hello = 'Hello World';
    resolve(hello);
    // reject(new Error('error'));
  });
}

// sayHello()
//   .then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;
//   })
//   .then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;
//   })
//   .then((resolvedData) => {
//     console.log(resolvedData);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function test() {
  const hello1 = await sayHello();
  console.log(hello1);
}

test();
