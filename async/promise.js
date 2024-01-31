'use strict'

// Promise is a JavaScript object for asynchronous operation
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// new <any>(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void) => Promise<any>
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (서버에서 데이터 가져오기, 네트워크에서 파일 다운받기...., network, read files ...)
    console.log('doing something....');
    setTimeout(() => {
        resolve('jesse');
        // reject(new Error('no network'));    // Uncaught (in promise) Error: no network 그냥 보내기만 하면 잡히지 않은 에러 발생
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => console.log(error))   // Error: no network
    .finally(() => console.log('finally'))

// 4. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)   // 2
    .then(num => num * 3)   // 6
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num - 1);
            }, 1000);
        })
    })  // 5
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('🐓');
    }, 1000);
});

const getEgg = hen => new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(`${hen} => 🥚`);
        reject(new Error(`error! ${hen} => 🥚`));   // Uncaught (in promise) Error: error! 🐓 => 🥚
    }, 1000);
});

const cook = egg => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`${egg} => 🍳`);
    }, 1000);
});

// 콜백함수에서 받아오는 value를 바로 다른 함수를 호출할 때 매개변수로 쓸 때는 생략이 가능하다.
// getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));
getHen()   
.then(getEgg)
.catch(error => {
    return `🥐`;
})
.then(cook)
.then(console.log)  // 🥐 => 🍳
.catch(console.log);    // Error: error! 🐓 => 🥚
// 🐓 => 🥚 => 🍳