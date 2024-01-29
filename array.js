'use strict';
// Array 💢

// 1. Array Declaration
const arr1 = new Array();
const arr2 = [1, 2];    // 더 흔하게 씀

// 2. Index position
const fruits = ['🍇', '🍓'];
console.log(fruits);    // (2) ['🍇', '🍓']
/* 
0
: 
"🍇"
1
: 
"🍓"
length
: 
2
*/
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 마지막 데이터에 접근할 때

// 3. Looping over an array

console.clear();
// a. for loop
console.log('a. for loop');
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
console.log('b. for of');
for (let val of fruits) {
    console.log(val);
}

// c. foreach
console.log('c. foreach');
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
fruits.forEach(function(fruit, index, array) {
    console.log(fruit, index, array);
});
/*
🍇 0  Array [ "🍇", "🍓" ]
🍓 1  Array [ "🍇", "🍓" ]
*/
// 익명 함수는 화살표로 대신할 수 있다
// 한 줄짜리면 중괄호 생략 가능
fruits.forEach((fruit) =>  console.log(fruit));

console.clear();
// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🥥', '🍌');
console.log(fruits);    // Array(4) [ "🍇", "🍓", "🥥", "🍌" ]

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);    // Array(3) [ "🍇", "🍓"]

// unshift: add an item to the beginning
fruits.unshift('🥥', '🍌');
console.log(fruits);    // Array(4) [ "🥥", "🍌", "🍇", "🍓" ]
// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);    // Array(3) [ "🍌", "🍇", "🍓" ]
fruits.shift();
console.log(fruits);    // Array [ "🍇", "🍓" ]

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
console.clear();
fruits.push('🥥', '🍌', '🍑');
console.log(fruits);    // Array(5) [ "🍇", "🍓", "🥥", "🍌", "🍑" ]
// splice(start: number, deleteCount?: number | undefined): string[]
fruits.splice(1, 1);
console.log(fruits);    // Array(4) [ "🍇", "🥥", "🍌", "🍑" ]
fruits.splice(1, 1, '🍒', '🍎');
console.log(fruits);    // Array(5) [ "🍇", "🍒", "🍎", "🍌", "🍑" ]

// combine two arrays
console.clear();
const fruits2 = ['🍐', '🍉'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);     // Array(7) [ "🍇", "🍒", "🍎", "🍌", "🍑", "🍐", "🍉" ]

// 5. Searching
// find the index
console.clear();    
console.log(fruits);    // Array(5) [ "🍇", "🍒", "🍎", "🍌", "🍑" ]
console.log(fruits.indexOf('🍒'));   // 1
console.log(fruits.indexOf('🍌'));  // 3
console.log(fruits.includes('🍑')); // true
console.log(fruits.includes('🥥')); // false
console.log(fruits.indexOf('🥥'));  // -1

// lastIndexOf
console.clear(); 
fruits.push('🍇')
console.log(fruits);    // Array(6) [ "🍇", "🍒", "🍎", "🍌", "🍑", "🍇" ]
console.log(fruits.indexOf('🍇'));  // 0
console.log(fruits.lastIndexOf('🍇'));  // 5
console.clear();