'use strict'
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function delclaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// ex) creationCardAndPoint -> createCard, createPoint
// funciton is object in JS

// 유용하지 않은 함수 - Hello만 출력
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello!');
log(12345);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const jesse = {name: 'jesse'};
changeName(jesse);
log(jesse); // {name: 'coder'}

// 3. Default parameters (added in ES6)
function showMessage(messeag, from = 'unknown') {
    console.log(`${messeag} by ${from}`);
}

showMessage('Hi!'); // Hi! by undefined / after default parameter  Hi! by unknown

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    // for (let i = 0; i < args.length; i++) {
    //     console.log(args[i]);
    // }

    // for (const arg of args) {
    //     console.log(arg);
    // }

    args.forEach((arg) => console.log(arg));
}
printAll('jesse', 'johann')

// 5. Local scope
let globalMessage = 'global';   // global variable
function printMessage() {
    let message = 'hello';
    console.log(message);   // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); Uncaught ReferenceError: childMessage is not defined
    // return undefined;
}
printMessage();
// console.log(message); Uncaught ReferenceError: message is not defined

console.log(`sum: ${sum(10, 99)}`); // hoisted
// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);   // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another funciton

// 1. Function expression
// a function declaration can be called earlier than is is defined. (hoisted)
// a function expression is created when the execution reaches it.
// print();    // Uncaught ReferenceError: Cannot access 'print' before initialization
const print = function () { // anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function is using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const pYes = function () {
    console.log('yes!');
}

// named funciton
// better debuggin in debugger's stack traces - 디버깅할 때 이름이 나옴
// recursions - 재귀함수, 무한호출 할 수 있으니까 정말 필요할 때 사용하기
const pNo = function print() {
    console.log('no!');
    // print(); Maximum call stack size exceeded 에러가 발생
};

randomQuiz('hate you', pYes, pNo);  // no!
randomQuiz('love you', pYes, pNo);  // yes!

// Arrow function
// always anonymous
// const simlePrint = function () {
//     console.log('simplePrint');
// };

const simlePrint =  () => console.log('simplePrint');
/*
const add = function (a, b) {
    return a + b;
}
*/
const add = (a, b) => a + b;

// do something more
const addMore = (a, b) => {
    ++a;
    b = b * a;
    // return 키워드 사용해야 함;
    return a + b;
}

// IIFE: Immediately Invoked Function Expression
// 최근에 잘 쓰이진 않음
(function hello() {
    console.log('IIFE');
})();
// hello();

// Fun quiz time💙
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
console.log('### QUIZ');
const calculate = (command, a, b) => {
    let result;
    if (isNaN(a) || isNaN(b)) {
        result = 'a or b is not a number';
        return result;
    }
    // 정해진 데이터를 비교할 때는 if문보다 switch문이 좋다.
    // break 대신에 바로 return
    switch (command) {
        case 'add':
            result = `${a} + ${b} = ${a + b}`;
            break;
        case 'substract':
            result = `${a} - ${b} = ${a - b}`;
            break;
        case 'divide':
            if (b == 0) result = 'devide by 0';
            else result = `${a} / ${b} = ${a / b}`;
            break;
        case 'multiply':
            result = `${a} * ${b} = ${a * b}`;
            break;
        case 'remainder':
            if (b == 0) result = 'devide by 0';
            else result = `${a} % ${b} = ${a % b}`;
            break;
        default:
            // throw Error('wrong command') 할 수도
            result = 'wrong command';
            break;
    }
    return result;
};
console.log(calculate('add', 'af', 3));
console.log(calculate('remainder', 4, 3));
console.log(calculate('divide', 4, 3));