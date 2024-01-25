'use strict'
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality/
// Nearly all objects in JavaScript are instances of Object
// object = {key : value}

// 1. Literals and properties
// const name = 'jesse';
// const age = 28;
// print(name, age);
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const jesse = {name: 'jesse', age: 28};
print(jesse);
console.log(typeof jesse);  // object

const obj1 = {};            // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

// 자바스크립트는 동적 런타임 언어
// Runtime: 프로그램이 동작하고 있을 때
// 위에서 정의한 오브젝트에 key:value 추가/삭제 가능함
jesse.hasJob = true;
console.log(`jesse.hasJob ${jesse.hasJob}`);    // jesse.hasJob true
delete jesse.hasJob;
console.log(`jesse.hasJob ${jesse.hasJob}`);    // jesse.hasJob undefined

// 2. Computed properties
// key should be always string
console.log(jesse.name);
console.log(jesse['name'])
jesse['hasJob'] = true;
console.log(jesse['hasJob'])

function printValue(obj, key) {
    console.log(`obj.key: ${obj.key} || obj[key]: ${obj[key]}`);
}

printValue(jesse, 'name');  // obj.key: undefined || obj[key]: jesse

// 3. Property value shorthand
const p1 = {name: 'bob', age: 2};
const p2 = {name: 'keira', age: 3};
const p3 = {name: 'alice', age: 4}
// const p4 = makePerson('johann', 30);
const p4 = new Person('johann', 30);
console.log(p4);    // {name: 'johann', age: 30} | Person {name: 'johann', age: 30}

// class 개념이 도입되기 이전 자바스크립트에서 오브젝트를 생성하던 방식
// 4. Constructor function
function Person(name, age) {
    // 매개변수와 key가 스펠링이 동일하다면 매개변수만 전달해도 됨
    // return {
    //     name,
    //     age
    // };
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)\
let key = 'name';
console.log(key in jesse);   // true
console.log('age' in jesse);    // true
console.log('loc' in jesse);    // false

// 6. for..in vs for..of
// for (key in object)
console.clear();
for (key in jesse) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 7];
for (let val of array) {
    console.log(val)
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
console.clear();
const user = new Person('jesse', 28);
const user2 = user; // 주소 복사, 얕은 복사
// user2.name = 'cody';
console.log(user);  // Person {name: 'cody', age: 28}

// 깊은 복사
// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3); 

const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue',  size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);    // 뒤에 있는 오브젝트가 앞에 있는 오브젝트를 덮어씀. 같은 프로퍼티가 있으면
console.log(mixed.color);   // blue
console.log(mixed.size);    // big