'use strict'
// async & await
// clear style of using promise

// 1. async
async function fetchUser() {
    // do network request in 10 sec...
    // return 'jesse';
    // 
    // return new Promise((resolve, reject) => {
    //     resolve('jesse')
    // });
    return 'jesse';
}

const user = fetchUser();
user.then(console.log)
console.log(user);

// 오래 걸리는 일들은 비동기적으로 처리해줘야 진행에 무리가 없다.

// 2. await 💫
function delay(ms) {
    return new Promise((resolve => setTimeout(resolve, ms)));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

// function getBananaPromise() {
//     return delay(3000).then(() => '🍌');
// }

// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana()
//         .then(banana => `${apple} + ${banana}`);
//     })
// }
async function pickFruits() {
    // Promise는 만들자마자 실행됨
    const applePromise = getApple();
    const bananaPromise = getBanana();
    // const apple = await getApple();
    // const banana = await getBanana();
    // 동시
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`
}

pickFruits().then(console.log)

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log)

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);