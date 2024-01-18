// 1. use strict
// added in ES 5
// use this for Vanila Javascript
'use strict';

// 2. Variable - 변수
// let (added in ES6)
let globalName = 'global name';
{
let name = 'jesse';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever user this)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
age = 4;
var age;
}
console.log(age)

// 3. Constants
// favor immutable data type always for a few reasons;
// - security 보안상의 이유 - 외부에서 값 변경하지 못 하도록
// - thread safety - 쓰레드가 변수에 접근해서 변경하지 못 하도록
// - reduce human mistakes - 실수 방지
const daysInWeek = 7;
const maxNumber = 5;
showValueTypeOf(helloBob)
function showValueTypeOf(val) {
    console.log(`value: ${val}, type: ${typeof val}`)
}
// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
const count = 17;   // integer
const size = 17.1;  // decimal number
console.log(`value: ${count}, type: ${typeof count}`)
console.log(`value: ${size}, type: ${typeof size}`)

// number - special numeric values: Infinity, -Infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInf (fairly new, don't use it yet)
const bigInt = 1231209887129847190338983718294376938432901412981222312341289712987n; // over (-2^53) ~ 2^53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`) // value: 1231209887129847190338983718294376938432901412981222312341289712987, type: bigint
console.log(Number.MAX_SAFE_INTEGER)


// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
showValueTypeOf(greeting);
const helloBob = `hi ${brendan}`;   // template literals  (string)


// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
showValueTypeOf(canRead);
showValueTypeOf(test);

// null
let nothing = null;
showValueTypeOf(nothing);   // value: null, type: object

// undefined
let x;
showValueTypeOf(x); // value: undefined, type: undefined

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2)    // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2)  // false
showValueTypeOf(symbol1.description)    // value: id, type: string

// object, real-life object, data structure
const jesse = {name: 'jesse', age: 28};
jesse.age = 29;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)) // h
showValueTypeOf(text);  // value: hello, type: string
text = 1;
showValueTypeOf(text)   // value: 1, type: number
text = '7' + 5;
showValueTypeOf(text)   // value: 75, type: string
text = '8' / '2';
showValueTypeOf(text)   // value: 4, type: number
// console.log(text.charAt(0)) // variable.js:105 Uncaught TypeError: text.charAt is not a function at variable.js:105:18