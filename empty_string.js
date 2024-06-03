let str = 'Alamin hossen'
let str1 = str.charAt(11)
console.log(str1)

let strin = 'Alamin Hossen a programmer'
let length = 0;
while (true) {
  if (strin.charAt(length) == '' ) {
    break
  } else {
    length++
  }
}
console.log(length)
console.log(strin.length)



let arr = [1, 2, 3, 56]

// for(let  i = 0; i<arr.length; i++) {
//   // console.log(arr[i])
//   arr[i] = arr[i] + 2
//   console.log(arr[i])
// }

let sum = 0;
for(i = 0; i<arr.length; i++){
  sum +=arr[i]
}
console.log(sum)



for (let i = 0; i<arr.length; i++){
  if(arr[i]%2 == 0){
    console.log(arr[i])
  }

}