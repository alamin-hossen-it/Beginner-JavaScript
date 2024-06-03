let obj = {
  a: 10,
  b: 20,
  c: 30,
};

// let obj2 = obj
// obj2.b = 34 // i want to just change the b value of obj2. but obj value is also change
// console.log(obj) //{a: 10, b: 34, c: 30}
// console.log(obj2) //{a: 10, b: 34, c: 30}

//for the expeted change we have the magical method let see how.

let obj2 = Object.assign({}, obj); //This way we can do what we want so great wow. we change the value b of obj2.
obj2.b = 34;

console.log(obj); //{a: 10, b:  20, c: 30}
console.log(obj2); //{a: 10, b: 34, c: 30}

function sum(a, b) {
  const totalNumber = a + b;
  console.log(totalNumber);
}
sum(3, 75);
sum(31, 75);
sum(1, 75);
sum(6, 75);
