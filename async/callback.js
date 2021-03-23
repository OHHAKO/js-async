'use strict'; //can check the log in browser
console.log("1");
setTimeout(function () {
    console.log("2")
}, 1000);
console.log("3");


//1. Synchronous callback (즉각 동기실행)
function printImmediatly(print) { //callback을 인자로 받기
    print();
}
printImmediatly(()=>console.log("hello"));


//2, Asynchronous callback (예측불가)
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);


//3. Callback Hell Example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'hako' && password === "123") ||
                (id === 'kozi' && password === "456")
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found 400'));
            }
        },2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === "hako") {
                onSuccess({ name: 'hako', role: "admin" });
            } else {
                onError(new Error("no access"));
             }
         }, 1000);
    }
    
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id, password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => alert(`you have ${userWithRole.role}! hi ${userWithRole.name}:)`),
            error => console.log(error)
        )
    },
    error => console.log(error)
);


