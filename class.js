'use strict'
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6 이전엔 클래스 정의하지 않고 바로 오브젝트 생성함
//  - syntactical sugar over prototype-based inheritance 문법상 편의를 제공하는 식으로 클래스가 추가됨

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello`);
    }
}

// Object 생성
const jesse = new Person('jesse', 28);
console.log(jesse.name);
console.log(jesse.age);
jesse.speak();  // jesse: hello

// 2. Getters and Setters
class User {
    constructor(firstName, lastName, age) {
        /*
        이런 오류
        class.js:42 Uncaught RangeError: Maximum call stack size exceeded
            at set age [as age] (class.js:42:18)
            at set age [as age] (class.js:42:18)
            at set age [as age] (class.js:42:18)
            at set age [as age] (class.js:42:18)
            at set age [as age] (class.js:42:18)
            at set age [as age] (class.js:42:18)
            at set age [as age] (class.js:42:18)
            at set age [as age] (class.js:42:18)
            at set age [as age] (class.js:42:18)
            at set age [as age] (class.js:42:18)
        */
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; // 실제로는 get age(), set age(value)로 인식 중
    }

    // get age() {
    //     return this.age;
    // }
    // set age(value) {
    //     this.age = value;
    // }
    // 그래서 getter와 setter와 이름을 조금 다르게 가져옴
    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Johann', 'Geens', -1);
/*
class.js:65 Uncaught Error: age can not be negative
    at set age [as age] (class.js:65:19)
    at new User (class.js:49:18)
    at class.js:71:15
*/
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// MDN에서 확인
class Experiment {
    publicField =2;
    #privateField = 0;
}

const exp = new Experiment();
console.log(exp.publicField);
console.log(exp.privateField)

// 4. Static properies and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article = new Article(2);
console.log(article.publisher); // undefined
console.log(Article.publisher); // Dream Coding
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class
class Shape {
    constructor(width, heigt, color) {
        this.width = width;
        this.heigt = heigt;
        this.color = color;
    }

    draw() {
        // console.log(`drawing ${this.color} color of`);
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.heigt;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('🔺');
    }
    // Overriding
    getArea() {
        return (this.width * this.heigt) / 2;
    }

    toString() {
        return `Triangle: color: ${this.color}`
    }
}
const rect1 = new Rectangle(20, 20, 'blue');
rect1.draw();   // drawing blue color of -> drawing blue color!
console.log(rect1.getArea());   // 400
const tri1 = new Triangle(20, 20, 'red');
tri1.draw();    // drawing red color of -> drawing red color! -> 🔺 -> drawing red color! 🔺
console.log(tri1.getArea());    // 200
console.log(tri1.toString());
// 6. Class checking: instanceof
console.log('## 6. instanceof');
console.log(rect1 instanceof Rectangle);    // true
console.log(tri1 instanceof Rectangle);     // false
console.log(tri1 instanceof Triangle);      // true
console.log(tri1 instanceof Shape);         // true
console.log(tri1 instanceof Object);        // true