'use strict'
// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
// console.log(['apple', 'banana'])    // Array [ "apple", "banana" ]
console.log(json);  // ["apple","banana"]

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    }
};

json = JSON.stringify(rabbit);
console.log(json);  // {"name":"tori","color":"white","size":null,"birthDate":"2024-01-29T06:56:32.033Z"}
// 함수는 JSON에 포함되지 않음
// 함수는 오브젝트의 데이터가 아니기 때문
// Symbol도 포함되지 않음

// stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string
// 해당하는 property만 JSON으로 만들 수 있다.
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // return value;
    return key === 'name' ? 'jesse' : value;
});
/*
rabbit을 감싸는 최상단 오브젝트도 출력함
key: , value: [object Object] 
key: name, value: tori 
key: color, value: white 
key: size, value: null 
key: birthDate, value: 2024-01-29T07:02:14.013Z 
key: jump, value: () => {

        console.log(`${name} can jump!`);

    } 
*/
console.log(json);  // {"name":"jesse","color":"white","size":null,"birthDate":"2024-01-29T07:04:08.818Z"}
console.clear();
// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);   // Object { name: "tori", color: "white", size: null, birthDate: "2024-01-29T07:07:36.907Z" }
rabbit.jump();
// obj.jump(); // Uncaught TypeError: obj.jump is not a function
console.log(rabbit.birthDate.getDate());    // 29
// console.log(obj.birthDate.getDate());   // Uncaught TypeError: obj.birthDate.getDate is not a function 왜냐하면 JSON에는 string으로 할당됨
console.log(obj.birthDate); // 2024-01-29T07:12:02.885Z

// JSON.parse(text: string, reviver?: ((this: any, key: string, value: any) => any) | undefined): any
const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj2);  // Object { name: "tori", color: "white", size: null, birthDate: Date Mon Jan 29 2024 16:14:17 GMT+0900 (대한민국 표준시) }
console.log(obj2.birthDate.getDate());  // 29