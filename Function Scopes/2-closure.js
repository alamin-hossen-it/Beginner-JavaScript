function multiplier(t) {
    return function (n) {
        return n * t;
    };
}

const multiplyBy5 = multiplier(5);
console.log(multiplyBy5(10));
console.log(multiplyBy5(15));
console.log(multiplyBy5(20));
console.log(multiplyBy5(25));
console.log(multiplyBy5(30));

const multiplyBy10 = multiplier(10);
console.log(multiplyBy10(10));
console.log(multiplyBy10(15));
console.log(multiplyBy10(20));
console.log(multiplyBy10(25));
console.log(multiplyBy10(30));