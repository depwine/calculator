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

/*
//test
operate("subtractCase", 1, 2);

console.log("add: "+add(1,2));
console.log("subtract: "+subtract(3, 1));
console.log("multiply: "+multiply(1,3));
console.log("divide: "+divide(3, 1));
*/