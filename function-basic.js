'use strict'

// 함수 선언

function doSomething(add) {
    console.log(add);
    const result = add(2, 3);
    console.log(result);
}

function add(a, b) {
    const sum = a + b;
    return sum;
}

// 함수 호출
// 함수를 전달함
// doSomething(add);

/*
function add(a, b)
​
length: 2
​
name: "add"
​
prototype: Object { … }
​
<prototype>: function ()

5

*/

// const result = add(1, 2);
// console.log(result);

// doSomething(add()); // NaN

// doSomething(add(1, 2)); // 3 / Uncaught TypeError: add is not a function 왜냐하면 add에서 연산한 값을 반환한 값이 doSomething의 매개변수가 됨

const addFun = add;
console.log(addFun);    
/*
function add(a, b)
​
length: 2
​
name: "add"
​
prototype: Object { … }
​
<prototype>: function ()

*/
console.log(addFun(2, 4));  // 6