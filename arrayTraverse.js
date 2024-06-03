 //Araay Traverseing array elements

 const arr = [47, 5, 78, 63, 99, 14, 55, 39]
 const n = arr[3];
 const m = arr[2];
 const x = 1, y = 0;
 
//  console.log(m, n, arr[x], arr[y], arr[x] + arr[y], arr[x + y + 1])


 /**
 'A' 'B' 'C' 'D'
  0   1   2   3

  1 2 3 4 5 
  0 1 2 3 4 

  1 B 3 5 F O true
  0 1 2 3 4 5 6
  */

  // Simple Array Traverse

  for (let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
  }


  // Array Sum & Avg
  /**
   * sum = 0
   * sum = 0 + 1 = 1
   * sum = 1 + 2 = 3
   * sum = 3 + 3 = 6
   * sum = 6 + 4 = 10
   */
  let sum = 0
  for(let i = 0; i<arr.length; i++){
    sum += arr[i];
  }
  console.log(sum)
  console.log(sum/arr.length)

  // Find Learge Number
let largestNumber = arr[0]
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largestNumber) {
    largestNumber = arr[i];
  }
 
}
console.log(largestNumber);

// find the minimum numnber
let miniMum = arr[0]
for(let i = 1; i< arr.length; i) { 
 if(miniMum < arr[i]) {
  miniMum = arr[i];
 }
}
// console.log(miniMum);