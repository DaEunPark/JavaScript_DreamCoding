// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log('Q1. ' , fruits.toString());
    console.log('Q1 solve. ' , fruits.join());
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log('Q2. ' , fruits.split(','));
    console.log('Q2. Solve. ' , fruits.split(',', 2));  // 반환할 배열의 개수 정할 수 있다.
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    console.log('Q3. ', array.reverse());
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const newArray = array.slice(2, array.length);
    console.log('Q4. ', newArray);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    // Arrow Function일 때 한 줄짜리면 return과 ; 생략 가능
    console.log('Q5. ', students.find((student) => student.score === 90));
    // solve
    const result = students.find(function (student) {
        return student.score === 90;
    });
    console.log('Q5. Solve. ' , result)
}

// Q6. make an array of enrolled students
{
    console.log('Q6. ', students.filter((student) => student.enrolled));
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    console.log('Q7. ', students.map((student) => student.score));
}

// Q8. check if there is a student with the score lower than 50
{
    // 하나라도 50 미만이면 true, 모두 50 이상이면 false
    console.log('Q8. ', students.some((student) => student.score < 50));

    // 모두 50 이상이면 true, 하나라도 50 미만이면 false
    const result = !students.every((student) => student.score >= 50);
    console.log('Q8. solve', result);
}

// Q9. compute students' average score
{
    console.log('Q9. ', students.map((student) => student.score).reduce((a, b) => a + b) / students.length);

    // prevValue는 콜백 함수의 반환값, currStudent는 배열의 현재 요소, 초기값은 prevValue 초기화?
    const result = students.reduce((prevValue, currStudent) => prevValue + currStudent.score, 0);
    console.log('Q9. solve. ', result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    // console.log('Q10', students.map((student) => student.score).toString());
    console.log('Q10. ', students.map((student) => student.score).join(', '));
    // 만약 50점 이상인 점수만 출력한다면
    console.log('Q10. ex)', students.map((student) => student.score).filter(score => score >= 50).join(', '));
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    console.log('Bonus. ', students.map((student) => student.score).sort((a, b) => a - b).join(', '));

    console.log('Bonus. ex)', students.map((student) => student.score).sort((a, b) => b - a).join(', '));
}