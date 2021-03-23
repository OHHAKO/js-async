'use strict';

/* Promise is a JavaScript object for asynchronous operation. 
   There are two points. 
   1. state(pending -> fulfilled or rejected) 
   2. Producer and Consumer 
*/

// 1. Producer
// WARN: auto runs
const promise = new Promise((resolve, reject) => {
    //doing some heavy work (network, read fiiles)
    console.log("doing something...");
    setTimeout(() => {
       resolve("hako");
        // reject(new Error('no newtork'));
    }, 2000);
});

//2. Consumer: then, catch, finally
promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => console.log("unconditionally print"))
    
//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));


// 4. Error Handling
const getHen = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('chicken'), 1000);
});
const getEgg = hen => new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${hen} => egg`)), 1000);
})
const cook = egg => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => frieEgg`), 1000);
})

getHen()
    .then(hen => getEgg(hen))
    .catch(error => {
        return "bread";
    })
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
    .catch((err)=>console.log(err));