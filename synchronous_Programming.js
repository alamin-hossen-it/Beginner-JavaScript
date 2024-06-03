const taskOne = () => {
    console.log('Task 1')
}
// const dataLoading = ()=> {
//     console.log('Task 2. Data loading... for APIs requeste') // Anonymus Function.
// }
const taskTwo = () => {
    setTimeout(() =>{
     console.log('Task 2. Data loading... for APIs requeste') // Anonymus Function. //Asynchronous function for using setTimeout function. we can change synchronous to Asynchronous using to setTime out function.
  }, 2000)
}
const taskThree = () => {
    console.log('Task 3')
}
const taskFour = () => {
    console.log('Task 4')
}
const taskFive = () => {
    console.log('Task 5')
}


taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();