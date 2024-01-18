'use strict'
// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`)
/*
my cat
12
string literals: 1 + 2 = 3
*/

// 2.  Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3);    // exponentiation 2^3 8

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter += 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement},  counter: ${counter}`); // preIncrement: 3,  counter: 3
const postIncrement = counter++;
// postIncrement = counter;
// counter += 1;
console.log(`postIncrement: ${postIncrement},  counter: ${counter}`);   // postIncrement: 3,  counter: 4
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement},  counter: ${counter}`); // preDecrement: 3,  counter: 3
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement},  counter: ${counter}`);   // postDecrement: 3,  counter: 2

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);
console.log(10 === 6);

// 6. Logical operators
const val1 = false;
const val2 = 4 < 2; // false

// || (or), finds the first truthly value
console.log(`or: ${val1 || val2 || check(true)}`);  // 🐬*10 or: true

const val3 = true;
console.log(`or: ${val3 || val2 || check(true)}`);  // or: true

// && (and), finds the first falsy value
console.log(`and: ${val3 && val2 && check(true)}`); // and: false
const val4 = true;
console.log(`and: ${val3 && val4 && check(false)}`); // 🐬*10 and: false

// often used to compress lonf if-statement
// nullableObject && nullableObject.something
/*
if (nullableObject != null) {
    nullableObject.something;
}
*/

// ! (not)
console.log(!val1); // true

function check(val) {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('🐬');
    }
    return val;
}

// 7. Equality
console.log('7. Equality')
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);  // true
console.log(stringFive != numberFive);  // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
console.log('object equality by reference');
const jesse1 = { name: 'jesse' };
const jesse2 = { name: 'jesse' };
const jesse3 = jesse1;
console.log(jesse1 == jesse2);  // false
console.log(jesse1 === jesse2); // false
console.log(jesse1 === jesse3); // true

// equality - puzzler
console.log('equality - puzzler');
console.log(0 == false);            // true     *
console.log(0 === false);           // false    *
console.log('' == false);           // true     *
console.log('' === false);          // false    *
console.log(null == undefined);     // true     *
console.log(null === undefined);    // false    *

// 8. Conditional operators: if
console.log('\n8. Conditional operators: if');
// if, else if, else
const name = 'johann';
if (name === 'jesse') {
    console.log(`Welcome, ${name}`);
} else if (name === 'johann') {
    console.log(`You are amazing ${name}`);
} else {
    console.log('unknown')
}
// Welcome, jesse

// 9. Ternary operator: ?
// condition ? value1 : value2
console.log(name === 'jesse' ? 'yes' : 'no');   // no

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('so much!');
        break;
    case 'Firefox':
        console.log('love you!');
        break;
    case 'Opera':
        console.log('never give up!');
        break;
    default:
        console.log('same all');
        break;
}

// 11. Loops
// while loop, while the condition is truthy, body code is executed
let i = 3;
while (i > 0) {
    console.log(`while: ${i--}`);
}
// 3 2 1

// do while loop, body code is executed first, then check the condition;
do {
    console.log(`do while: ${i--}`);
} while (i > 0);
// 0

// for loop, for (begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
// 3 2 1

for (let i = 3; i > 0; i -= 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}
// 3 1

// nested loops
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(`i: ${i}, j: ${j}`);
//     }
// }

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
console.log('Q1')
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) continue;
    console.log(`for: ${i}`);
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
console.log('Q2')
for (let i = 0; i <= 10; i++) {    
    console.log(`for: ${i}`);
    if (i === 8) break;
}