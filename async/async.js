'use strict'; 

// 1.async
async function fetchUser() {
    //network request in 10 secs...
    return "hako";
    // return new Promise((resolve, reject) => {
        // resolve('hako');
    // }) 
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(3000);
    return "apple";
}

//Promise Consumer를 async로 작성할 수 있다.
async function getBanana() { 
    await delay(3000);
    return "banana";
}

//Consumer
function getBananaPromise() {
    return delay(3000)
    .then(() => "banana");
}

//Like Callback Hell!
function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}

async function pickFruitsAsync() {
    //TODO: need try/catch
    const apple = await getApple();
    const banana = await getBanana();
    return `Asnyc: ${apple} + ${banana}`;
}

//병렬 실행
async function pickFruitsAsync__() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `Asnyc: ${apple} + ${banana}`;
}


pickFruits().then(console.log);
pickFruitsAsync().then(console.log);