// Callback Hell Example
class UserStorage {
    loginUser(id, password) {

        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if ((id === 'jesse' && password === 'jung') || (id === 'johann' && password === 'Geens')) {
                    resolve(id);
                } else {
                    reject(new Error('id not found'));
                }
            }, 2000);
        })
        
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'jesse') {
                    resolve({name: 'jesse', role: 'bishop'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    }
}
// 연습
// 1.  id, password
// 2. loginUser
// 3. getRoles
// const id = 'jesse';
// const id = prompt('enter your id');
// // const pw = 'jung';
// const pw = prompt('enter your password');
// const userStorage = new UserStorage();
// // userStorage.loginUser(id, pw, (id)=>console.log(id), (error)=>console.log(error))
// // userStorage.getRoles(id, (id)=>console.log(id), (error)=>console.log(error));

// userStorage.loginUser(id, pw, id => {
//     userStorage.getRoles(id, userWithRole => {
//         alert(`hellp ${userWithRole.name}, you have a ${userWithRole.role} role`)
//     }, error => console.log(error))
// }, error => console.log(error))

const id = prompt('enter your id');
const pw = prompt('enter your password');

const userStorage = new UserStorage();
userStorage.loginUser(id, pw)
    .then(userStorage.getRoles)
    .then(user => alert(`hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);