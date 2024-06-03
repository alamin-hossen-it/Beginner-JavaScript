// update array elemints and fill array
// Array Fill Manual Way

const arr1 = new Array(10, 24, 7, 70, 65, 90, 6, 30, 55, 90);
// console.log(arr1);
for (i = 0; i < arr1.length; i++){
    arr1[i] = false;
}
// console.log(arr1)


// Array Fill Use Method/Function 

const arr2 = new Array(10);
arr2.fill(0);
// console.log(arr2);


// speafic kono value ke update korar khetre amader dorker index number
const names = ['Alamin', 'Sumon', 'Israfil'];
names[0] ='MD:Alamin Hossen';
names[1] = 'SI Sumon';
names[2] = 'Israfil Ovi';
// console.log(names)


//Project TIC TAC TOY

const response = new Array(9);
response.fill(false);
for(let i = 0; i < response.length; i++){
const rand = Math.floor(Math.random() * 10 + 1);
response[i] = rand > 5 ? 'X' : 'O'; 

  }
  console.log(response);

//Array is mutable


function update(arr){
  for(let i = 0; i < arr.length; i ++){
  arr[i] =  `${i+1}. ${arr[i]}`;
  }
  return arr;
}
const updatedNames = update(names);
console.log(names);
console.log(updatedNames)
console.log(names == updatedNames);