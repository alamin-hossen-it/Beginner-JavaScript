// const arr = [1, 2, 3];
// let sum = 0;
// arr.forEach((v) => {
//     // console.log('value', v ** v );
//     sum += v;
// });
// console.log(sum);

// // function toUpper(str, cb) {
// //     const upper = str.toUpperCase();
// //     cb(upper);
// // }

// // toUpper('alamin hossen', (str) => {
// //     console.log( str);

// // });

function square(x){
    console.log(`square of ${x}: ${x*x}`)

}

// const y = square
// y(5);

function higherOrderFunction  (num, callback) {

    callback(num)

}

// higherOrderFunction(6, square)
// higherOrderFunction(3, square)
// higherOrderFunction(100, square)



const taskOne = (f1) => {
    console.log('Task 1')
    f1();
}

const taskTwo = (f2) => {
    setTimeout(() =>{
     console.log('Task 2. Data loading... for APIs requeste') 
      f2();
  }, 3000)
}
const taskThree = (f3) => {
    console.log('Task 3')
    f3();
}
const taskFour = (f4) => {
    console.log('Task 4')
    f4();
}
const taskFive = () => {
    console.log('Task 5')
    
}

taskOne(() =>{
    taskTwo(() =>{
        taskThree(()=>{
            taskFour(() =>{
                taskFive()
            })
        })
    })
})