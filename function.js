
//1. Default param
function logDefault(name, say = "hello") {
    console.log(`hey ${name}! ${say}`);
    return undefined; //can be dropped
}
// logDefault("hako");

//2. Rest params
function printArray(...args) {
    for (let i = 0; i < args.length; i++) 
        console.log(args[i]);
    
    //for of
    for (const arg of args) 
        console.log(arg);

    args.forEach((arg) => console.log(arg));
}
printArray('hako', "hogwarts", "kozi");


//3. Function Declarations with callback hell
function randomQuiz(answer, printYes, printNo) {
    if (answer === "love you") {
        printYes();
    } else {
        printNo();
    }
}

//4. Function Expression (anonymous function) 
const printYes = function() {
    console.log("Yes");
}

//4-2. Function Expression (named function은 stack trace에 나옴)
const printNo = function print() {
    console.log("No");
}
randomQuiz("love you", printYes, printNo);

//4. Arrow function
const simplePrint = (a, b="kozi") => console.log(`${a} ${b} simple print`);
simplePrint("hako");

const add = (a, b) => a + b;
console.log(add(1, 9));