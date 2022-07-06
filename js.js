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

const percent = function(a){
    return 
}   

//call oper func
const operate = function (param, a, b){

    //reset total to zero
    let total = 0;
    
    switch (param) {
        case "addCase":
            total = add(a,b);
            console.log("add total: "+total);
            total = Math.round(total * 100) / 100;
            display = total;
            showDisplay.innerHTML = display;
            return total;
            break;

        case "subtractCase":
            total = subtract(a,b);
            console.log("subtract total: "+total);
            total = Math.round(total * 100) / 100;
            display = total;
            showDisplay.innerHTML = display;
            return total;
            break;

        case "multiplyCase":
            total = multiply(a,b);
            console.log("multiply total: "+total);
            total = Math.round(total * 100) / 100;
            display = total;
            showDisplay.innerHTML = display;
            return total;
            break;

        case "divideCase":
            total = divide(a,b);
            console.log("divide total: "+total);
            total = Math.round(total * 100) / 100;
            display = total;
            showDisplay.innerHTML = display;
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


//if its the first thing, assign param to operator
//if it's the second one, 

    if (param === null){
        param = "addCase";
    } else if (param !== null){

        //do operation upon button press as though it's an equal
        operate(param, a, b);

        //set new param
        param = "addCase";

        //if user wants to perform additionals, set A to current total
        //and reset bArray, set b to zero
        a = display;
        bArray = [];
        b = 0;

    }


})

const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener(`click`, function(e){
    //console.log("subtract button pressed");

    if (param === null){
        param = "subtractCase";
    } else if (param !== null){

        //do operation upon button press as though it's an equal
        operate(param, a, b);

        //set new param
        param = "subtractCase";

        //if user wants to perform additionals, set A to current total
        //and reset bArray, set b to zero
        a = display;
        bArray = [];
        b = 0;

    }
})

const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener(`click`, function(e){
   // console.log("multiply button pressed");


   if (param === null){
    param = "multiplyCase";
} else if (param !== null){

    //do operation upon button press as though it's an equal
    operate(param, a, b);

    //set new param
    param = "multiplyCase";

    //if user wants to perform additionals, set A to current total
    //and reset bArray, set b to zero
    a = display;
    bArray = [];
    b = 0;

}
})


const divideButton = document.querySelector("#divide");
divideButton.addEventListener(`click`, function(e){

    if (param === null){
        param = "divideCase";
    } else if (param !== null){

        //do operation upon button press as though it's an equal
        operate(param, a, b);

        //set new param
        param = "divideCase";

        //if user wants to perform additionals, set A to current total
        //and reset bArray, set b to zero
        a = display;
        bArray = [];
        b = 0;

    }
})

const equalButton = document.querySelector("#equal");
equalButton.addEventListener(`click`, function(e){
    //console.log("equal button pressed");

    //return math for operator and 2 numbers
    operate(param, a, b);

    //if user wants to perform additionals, set A to current total
    //and reset bArray, set b to zero
    a = display;
    bArray = [];
    b = 0;
    
    /* test
    console.log("param =  "+param);
    console.log("a =  "+a);
    console.log("b =  "+b);
    console.log("display: "+display);
    */
    param = null;
    //console.log(param);
    
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener(`click`, function (e){
    //test 
    //console.log("clear button pressed");
    
    //clear all values and variables
    aArray = [];
    bArray = [];
    param = null;
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
            a = parseFloat(a);
            display = a;
            showDisplay.innerHTML = display;

        }



    } else if (param !== null){

        
        bArray.push(1);

        if (bArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if (bArray.length <= 5) {

            b = bArray.join("");
            b = parseFloat(b);
            display = b;
            showDisplay.innerHTML = display;

        }
        
    }

    

    showDisplay.innerHTML = display;
})

const twoButton = document.querySelector("#two");
twoButton.addEventListener(`click`, (e) => {

    if (param == null){

        aArray.push(2);

        console.log(aArray);

        if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if (aArray.length <= 5) {

            a = aArray.join("");
            a = parseFloat(a);
            display = a;
            showDisplay.innerHTML = display;

        }



    } else if (param !== null){

        
        bArray.push(2);

        if (bArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if (bArray.length <= 5) {

            b = bArray.join("");
            b = parseFloat(b);
            display = b;
            showDisplay.innerHTML = display;

        }
        
    }

    

    showDisplay.innerHTML = display;
})

const threeButton = document.querySelector("#three");
threeButton.addEventListener(`click`, (e) => {

    if (param == null){

        aArray.push(3);

        console.log(aArray);

        if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if (aArray.length <= 5) {

            a = aArray.join("");
            a = parseFloat(a);
            display = a;
            showDisplay.innerHTML = display;

        }



    } else if (param !== null){

        
        bArray.push(3);

        if (bArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if (bArray.length <= 5) {

            b = bArray.join("");
            b = parseFloat(b);
            display = b;
            showDisplay.innerHTML = display;

        }
        
    }

    

    showDisplay.innerHTML = display;
})

const fourButton = document.querySelector("#four");
fourButton.addEventListener(`click`, (e) => {

    if (param == null){

        aArray.push(4);

        console.log(aArray);

        if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if (aArray.length <= 5) {

            a = aArray.join("");
            a = parseFloat(a);
            display = a;
            showDisplay.innerHTML = display;

        }



    } else if (param !== null){

        
        bArray.push(4);

        if (bArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if (bArray.length <= 5) {

            b = bArray.join("");
            b = parseFloat(b);
            display = b;
            showDisplay.innerHTML = display;

        }
        
    }

    

    showDisplay.innerHTML = display;
})

const fiveButton = document.querySelector("#five");
fiveButton.addEventListener(`click`, (e) => {

    if (param == null){

        aArray.push(5);

        console.log(aArray);

        if (aArray.length > 5){
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if (aArray.length <= 5) {

            a = aArray.join("");
            a = parseFloat(a);
            display = a;
            showDisplay.innerHTML = display;

        }



    } else if (param !== null){

        
        bArray.push(5);

        if (bArray.length > 5){
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if (bArray.length <= 5) {

            b = bArray.join("");
            b = parseFloat(b);
            display = b;
            showDisplay.innerHTML = display;

        }
        
    }

    

    showDisplay.innerHTML = display;
})
const sixButton = document.querySelector("#six");
sixButton.addEventListener(`click`, (e) => {

    if (param == null){

        aArray.push(6);

        console.log(aArray);

        if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if (aArray.length <= 5) {

            a = aArray.join("");
            a = parseFloat(a);
            display = a;
            showDisplay.innerHTML = display;

        }



    } else if (param !== null){

        
        bArray.push(6);

        if (bArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if (bArray.length <= 5) {

            b = bArray.join("");
            b = parseFloat(b);
            display = b;
            showDisplay.innerHTML = display;

        }
        
    }

    

    showDisplay.innerHTML = display;
})

const sevenButton = document.querySelector("#seven");
sevenButton.addEventListener(`click`, (e) => {

    if (param == null){

        aArray.push(7);

        console.log(aArray);

        if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if (aArray.length <= 5) {

            a = aArray.join("");
            a = parseFloat(a);
            display = a;
            showDisplay.innerHTML = display;

        }



    } else if (param !== null){

        
        bArray.push(7);

        if (bArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if (bArray.length <= 5) {

            b = bArray.join("");
            b = parseFloat(b);
            display = b;
            showDisplay.innerHTML = display;

        }
        
    }

    

    showDisplay.innerHTML = display;
})

const eightButton = document.querySelector("#eight");
eightButton.addEventListener(`click`, (e) => {

    if (param == null){

        aArray.push(8);

        console.log(aArray);

        if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if (aArray.length <= 5) {

            a = aArray.join("");
            a = parseFloat(a);
            display = a;
            showDisplay.innerHTML = display;

        }



    } else if (param !== null){

        
        bArray.push(8);

        if (bArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if (bArray.length <= 5) {

            b = bArray.join("");
            b = parseFloat(b);
            display = b;
            showDisplay.innerHTML = display;

        }
        
    }

    

    showDisplay.innerHTML = display;
})

const nineButton = document.querySelector("#nine");
nineButton.addEventListener(`click`, (e) => {

    if (param == null){

        aArray.push(9);

        console.log(aArray);

        if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if (aArray.length <= 5) {

            a = aArray.join("");
            a = parseFloat(a);
            display = a;
            showDisplay.innerHTML = display;

        }



    } else if (param !== null){

        
        bArray.push(9);

        if (bArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
    
        } else if (bArray.length <= 5) {

            b = bArray.join("");
            b = parseFloat(b);
            display = b;
            showDisplay.innerHTML = display;

        }
        
    }

    showDisplay.innerHTML = display;
})

const zeroButton = document.querySelector("#zero");
zeroButton.addEventListener(`click`, (e) => {

    if (param == null){

        if (aArray.length === 0){
            display = 0;
            showDisplay.innerHTML = display;

        } else if (aArray.length > 0 && aArray.length <= 5){

            aArray.push(0);
            a = aArray.join("");
            a = parseFloat(a);
            display = a;
            showDisplay.innerHTML = display;

        } else if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
        }





    } else if (param !== 0){

        if (bArray.length === 0){
            display = 0;
            showDisplay.innerHTML = display;

        } else if (bArray.length > 0 && bArray.length <= 5){

            bArray.push(0);
            b = bArray.join("");
            b = parseFloat(b);
            display = b;
            showDisplay.innerHTML = display;

        } else if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
        }

    }
})


/* period button tweaks
*/
const periodButton = document.querySelector("#period");
periodButton.addEventListener(`click`, (e) => {
    
    if (param == null){

        if (aArray.length === 0){
            display = 0;
            showDisplay.innerHTML = display;

        } else if (aArray.length > 0 && aArray.length <= 5){

            aArray.push(".");
            a = aArray.join("");
            a = parseFloat(a);
            display = a;
            showDisplay.innerHTML = display;

            const disablePeriod = function(){
                document.querySelector("#period").disabled = true;
            }

            disablePeriod();

        } else if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
        } 

    } else if (param !== 0){

        if (bArray.length === 0){
            display = 0;
            showDisplay.innerHTML = display;

        } else if (bArray.length > 0 && bArray.length <= 5){

            bArray.push(".");
            b = bArray.join("");
            b = parseFloat(b);
            display = b;
            showDisplay.innerHTML = display;

            const disablePeriod = function(){
                document.querySelector("#period").disabled = true;
            }

            disablePeriod();

        } else if (aArray.length > 5){
            console.log("too long")
            display = "ERR";
            showDisplay.innerHTML = display;
        }

        
    
    }
})






/*
//test
operate("subtractCase", 1, 2);

console.log("add: "+add(1,2));
console.log("subtract: "+subtract(3, 1));
console.log("multiply: "+multiply(1,3));
console.log("divide: "+divide(3, 1));
*/