"use strict";

function createSum() {
    let sum = 0;

    return function(num) {
        sum += num;
        return sum;
    }
}

let createSumFunction = createSum();

console.log(createSumFunction(3));
console.log(createSumFunction(5));
console.log(createSumFunction(20));