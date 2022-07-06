//declare display #
let display = 0;

//add
const add = function(a, b){
    return a+b;
}

//subtract
const subtract = function(a, b){
    return a-b;
}

//multiply
const multiply = function (a,b){
    return a*b;
}

//divide
const divide = function (a,b){
    return a/b;
}

const operate = function (param, a, b){

    //reset total to zero
    let total = 0;
    
    switch (param) {
        case "addCase":
            total = add(a,b);
            console.log("add total: "+total);
            return total;

        case "subtractCase":
            total = subtract(a,b);
            console.log("subtract total: "+total);
            return total;
            break;

        case "multiplyCase":
            total = multiply(a,b);
            console.log("multiply total: "+total);

            return total;
            break;

        case "divideCase":
            total = divide(a,b);
            console.log("divide total: "+total);
            return total;
            break;

        default:
            console.log("operate = " + param);
            console.log("you spelled something wrong, retard");
    }

}

//oper button functionality
const addButton = document.querySelector("#add");
    addButton.addEventListener(`click`, function(e){
        console.log("add button pressed");
    })

const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener(`click`, function(e){
    console.log("subtract button pressed");
})

const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener(`click`, function(e){
    console.log("multiply button pressed");
})

const divideButton = document.querySelector("#divide");
divideButton.addEventListener(`click`, function(e){
    console.log("divide button pressed");
})

const equalButton = document.querySelector("#equal");
equalButton.addEventListener(`click`, function(e){
    console.log("equal button pressed");
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener(`click`, function (e){
    console.log("clear button pressed");
})

const percentButton = document.querySelector("#percent");
percentButton.addEventListener(`click`, (e) =>{
    console.log("percent button pressed");
})

const posnegButton = document.querySelector("#posNeg");
posnegButton.addEventListener(`click`, (e) => {
    console.log("pos neg button pressed");
})

//0-9, period 

const oneButton = document.querySelector("#one");
oneButton.addEventListener(`click`, (e) => {
    console.log("one button pressed");
})

const twoButton = document.querySelector("#two");
twoButton.addEventListener(`click`, (e) => {
    console.log("two button pressed");
})

const threeButton = document.querySelector("#three");
threeButton.addEventListener(`click`, (e) => {
    console.log("three button pressed");
})

const fourButton = document.querySelector("#four");
fourButton.addEventListener(`click`, (e) => {
    console.log("four button pressed");
})

const fiveButton = document.querySelector("#five");
fiveButton.addEventListener(`click`, (e) => {
    console.log("five button pressed");
})

const sixButton = document.querySelector("#six");
sixButton.addEventListener(`click`, (e) => {
    console.log("six button pressed");
})

const sevenButton = document.querySelector("#seven");
sevenButton.addEventListener(`click`, (e) => {
    console.log("seven button pressed");
})

const eightButton = document.querySelector("#eight");
eightButton.addEventListener(`click`, (e) => {
    console.log("eight button pressed");
})

const nineButton = document.querySelector("#nine");
nineButton.addEventListener(`click`, (e) => {
    console.log("nine button pressed");    
})

const zeroButton = document.querySelector("#zero");
zeroButton.addEventListener(`click`, (e) => {
    console.log("zero button pressed");
})

const periodButton = document.querySelector("#period");
periodButton.addEventListener(`click`, (e) => {
    console.log("period button pressed");
})





/*
//test
operate("subtractCase", 1, 2);

console.log("add: "+add(1,2));
console.log("subtract: "+subtract(3, 1));
console.log("multiply: "+multiply(1,3));
console.log("divide: "+divide(3, 1));
*/