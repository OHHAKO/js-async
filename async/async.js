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
    await delay(2000);
    return "apple";
}

//Promise Consumer를 async로 작성할 수 있다.
async function getBanana() { 
    await delay(1000);
    return "banana";
}

//Consumer
function getBananaPromise() {
    return delay(1000)
    .then(() => "banana");
}

//Like Callback Hell!
function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}
pickFruits().then(console.log);

async function pickFruitsAsync() {
    //TODO: need try/catch
    const apple = await getApple();
    const banana = await getBanana();
    return `Asnyc: ${apple} + ${banana}`;
}
pickFruitsAsync().then(console.log);

//병렬 실행
async function pickFruitsAsync__() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `Asnyc: ${apple} + ${banana}`;
}

//3. useful Promise APIs (above code refactor)
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(allFruits => console.log(`all(): ${allFruits}`));

//4. Can get Faster Promise 
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
