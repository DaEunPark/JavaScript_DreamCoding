'use strict'

// JavaScript is synchronous
// Execute the code block in order after hoisting 호이스팅 후 코드 순서대로 실행
// hoisting: var, function declararion
console.log('1');
setTimeout(() => console.log('2'), 1000); // 1초 후에 콜백함수 실행
console.log('3');

// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(()=>console.log('hello'));
// Asynchronous callbakc
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);
/*
1 
3 
hello 
2 
async callback
*/

console.clear();
// Callback Hell Example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=> {
            if ((id === 'jesse' && password === 'jung') || (id === 'johann' && password === 'Geens')) {
                onSuccess(id);
            } else {
                onError(new Error('id not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'jesse') {
                onSuccess({name: 'jesse', role: 'bishop'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}
// 연습
// 1.  id, password
// 2. loginUser
// 3. getRoles
// const id = 'jesse';
const id = prompt('enter your id');
// const pw = 'jung';
const pw = prompt('enter your password');
const userStorage = new UserStorage();
// userStorage.loginUser(id, pw, (id)=>console.log(id), (error)=>console.log(error))
// userStorage.getRoles(id, (id)=>console.log(id), (error)=>console.log(error));

userStorage.loginUser(id, pw, id => {
    userStorage.getRoles(id, userWithRole => {
        alert(`hellp ${userWithRole.name}, you have a ${userWithRole.role} role`)
    }, error => console.log(error))
}, error => console.log(error))