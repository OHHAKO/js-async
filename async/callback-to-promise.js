'use strict'; 


class UserStorage {
    loginUser = (id, password) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'hako' && password === "123") ||
                    (id === 'kozi' && password === "456")
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found 400'));
                }
            }, 2000);
        });

    getRoles(user) { 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === "hako") {
                    resolve({ name: 'hako', role: "admin" });
                } else {
                    reject(new Error("no access")) ;
                }
             }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
    .loginUser(id, password)
    .then((user) => userStorage.getRoles(user))
    .then((userWithRole) => alert(`you have ${userWithRole.role}! hi ${userWithRole.name}:)`))
    .catch((error) => console.log(error));