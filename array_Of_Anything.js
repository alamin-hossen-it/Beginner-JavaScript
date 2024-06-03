// Array Of Anything

const arr = [10, 'Ten', true, getTen, {ten:10}, [10, 10]]
console.log(arr);
function getTen() {
    return 10;
}

const favChannels = [
    {name:'Stack Learner', url:'https://youtube.com/stacklearner'},
    {name: 'Js Bangladesh', url:'https://youtube.com/jsbangladesh'},
    {name: 'Traversy Media', url:'https//youtube.com/techguyweb'},
    {name: 'wes Bos', url:'https:youtube.com/weabos'},
]
console.log(favChannels);




//Array Of Functions

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const times = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

// loop and call all functions from array

const funcs = [sum, sub, times, div, mod];
const a = 10,
    b = 20;
 for (let i = 0; i < funcs.length; i++){
    const resule = funcs[i](a, b);
    console.log(`[${funcs[i].name}] Result = ${resule}`);
 }



 // Array of array multi dimensional Array


 const poinTable = [
    [0, 0],
    [3, 5],
    [5, 7],
    [10, 23],
 ]
 //one dimentional traverse
 for(let i = 0; i < poinTable.length; i++){
    console.log(`point ${i} - x=${poinTable[i][0]} and ${i} y=${poinTable[i][1]}`);
 }

//two dimentional array

const numbers = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
]
for(i = 0; i < numbers.length; i++){   
for(j = 0; j < numbers[i].length; j++){
    console.log(numbers[i][j]);
}
}

for(i = 0; i < poinTable.length; i++){
    for(j = 0; j < poinTable[i].length; j++){
        console.log( `Points [${i}, ${j}] = ${poinTable[i][j]}`); 
        // This line use for see multi Dimentional index number for each value on Array...
    }
}

matrixA = [
    [1, 3],
    [1, 0],
    [1, 2],
];

matrixB = [
    [0, 0],
    [7, 5],
    [2, 1], 
]

const matrixSum = (matrixA, matrixB) => {
    const result = []
    for(let i = 0; i < matrixA.length; i++){
        const row= []
        for(let j = 0; j < matrixA[i].length; j++){
          row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row)
    }
    return result
}
const matrixC = matrixSum(matrixA, matrixB);
console.log(matrixC);