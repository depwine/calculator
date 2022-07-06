//declare globals
let display = 0;
let param;
let aArray = new Array;
let bArray = new Array;
let a; 
let b;

//hook up display
const showDisplay = document.querySelector("#result");
showDisplay.innerHTML = display;

//add func
const add = function(a, b){
    return a+b;
}

//subtract func
const subtract = function(a, b){
    return a-b;
}

//multiply func
const multiply = function (a,b){
    return a*b;
}

//dividefunc
const divide = function (a,b){
    return a/b;
}

//call oper func
const operate = function (param, a, b){

    //reset total to zero
    let total = 0;
    
    switch (param) {
        case "addCase":
            total = add(a,b);
            console.log("add total: "+total);
            return total;
            break;

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
//    console.log("add button pressed");
    param = "add";
})

const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener(`click`, function(e){
    //console.log("subtract button pressed");
    param = "subtract";
})

const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener(`click`, function(e){
   // console.log("multiply button pressed");
    param = "multiply";
})

const divideButton = document.querySelector("#divide");
divideButton.addEventListener(`click`, function(e){
    //console.log("divide button pressed");
    param = "divide";
})

const equalButton = document.querySelector("#equal");
equalButton.addEventListener(`click`, function(e){
    //console.log("equal button pressed");
    operate(param, a, b);
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener(`click`, function (e){
    //test 
    //console.log("clear button pressed");
    
    //clear all values and variables
    aArray = [];
    bArray = [];
    param;
    a = 0;
    b = 0;
    display = 0;
    showDisplay.innerHTML = display;

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

    if (param == null){

        aArray.push(1);

        console.log(aArray);

        if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if (aArray.length <= 5) {

            a = aArray.join("");
            display = a;
            showDisplay.innerHTML = display;

        }



    } else {

        /* untested
        bArray.push(1);
        display = bArray.join("");
        */
    }

    

    showDisplay.innerHTML = display;
})

const twoButton = document.querySelector("#two");
twoButton.addEventListener(`click`, (e) => {

    if (param == null){

        aArray.push(2);
        a = aArray.join("");

        if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if(aArray.length <= 5) {

            a = aArray.join("");
            display = a;
            showDisplay.innerHTML = display;

        }


    } else {

        /* untested
        bArray.push(2);
        display = bArray.join("");
        */
    }

})

const threeButton = document.querySelector("#three");
threeButton.addEventListener(`click`, (e) => {

    if (param == null){

        aArray.push(3);
        a = aArray.join("");

        if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if(aArray.length <= 5) {

            a = aArray.join("");
            display = a;
            showDisplay.innerHTML = display;

        }

    } else {

        /* untested
        bArray.push(3);
        display = bArray.join("");
        */
    }

})

const fourButton = document.querySelector("#four");
fourButton.addEventListener(`click`, (e) => {

    if (param == null){

        aArray.push(4);
        a = aArray.join("");

        if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if(aArray.length <= 5) {

            a = aArray.join("");
            display = a;
            showDisplay.innerHTML = display;

        }

    } else {

        /* untested
        bArray.push(4);
        display = bArray.join("");
        */
    }

})

const fiveButton = document.querySelector("#five");
fiveButton.addEventListener(`click`, (e) => {

    if (param == null){

        aArray.push(5);
        a = aArray.join("");

        if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if(aArray.length <= 5) {

            a = aArray.join("");
            display = a;
            showDisplay.innerHTML = display;

        }

    } else {

        /* untested
        bArray.push(5);
        display = bArray.join("");
        */
    }

})

const sixButton = document.querySelector("#six");
sixButton.addEventListener(`click`, (e) => {

    if (param == null){

        aArray.push(6);
        a = aArray.join("");

        if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if(aArray.length <= 5) {

            a = aArray.join("");
            display = a;
            showDisplay.innerHTML = display;

        }

    } else {

        /* untested
        bArray.push(6);
        display = bArray.join("");
        */
    }

})

const sevenButton = document.querySelector("#seven");
sevenButton.addEventListener(`click`, (e) => {
    if (param == null){

        aArray.push(7);
        a = aArray.join("");

        if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if(aArray.length <= 5) {

            a = aArray.join("");
            display = a;
            showDisplay.innerHTML = display;

        }

    } else {

        /* untested
        bArray.push(7);
        display = bArray.join("");
        */
    }
})

const eightButton = document.querySelector("#eight");
eightButton.addEventListener(`click`, (e) => {

    if (param == null){

        aArray.push(8);
        a = aArray.join("");

        if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if(aArray.length <= 5) {

            a = aArray.join("");
            display = a;
            showDisplay.innerHTML = display;

        }

    } else {

        /* untested
        bArray.push(8);
        display = bArray.join("");
        */
    }

})

const nineButton = document.querySelector("#nine");
nineButton.addEventListener(`click`, (e) => {

    if (param == null){

        aArray.push(3);
        a = aArray.join("");

        if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if(aArray.length <= 5) {

            a = aArray.join("");
            display = a;
            showDisplay.innerHTML = display;

        }

    } else {

        /* untested
        bArray.push(3);
        display = bArray.join("");
        */
    }

})

const zeroButton = document.querySelector("#zero");
zeroButton.addEventListener(`click`, (e) => {

    if (param == null){

        if (aArray.length === 0){
            display = 0;
            showDisplay.innerHTML = display;

        } else if (aArray.length > 0){

            aArray.push(0);
            a = aArray.join("");
            display = a;
            showDisplay.innerHTML = display;

        } else if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        }  else if (aArray.length <= 5) {
            a = aArray.join("");

        }





    } else {

        /* untested
        bArray.push(3);
        display = bArray.join("");
        */
    }
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