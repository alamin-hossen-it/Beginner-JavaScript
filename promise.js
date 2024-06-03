// promise//

console.log('Start')
const promise1 = new Promise((resolve, reject)=>{
let completedPromise = true;
if(completedPromise){
    resolve('YES promise completed')
}else{
    reject( new Error('Sorry, promise is rejected'))
}
})

promise1.then(  (res) =>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})


console.log('End')