const arr = [];
arr [0] = 1;
arr [1] = 2;
arr [2] = 3;
arr [99] = 100;
console.log(arr.length);
console.log(arr);
// length = last index+1 [Index]
// lastindex = length-1 (100 length)
// empty array initialise(suru kora)

// with value initialise

const names = [
    'Alamin Hossen',
    'Hm Nayme',
    'Ahmed',
    'Muhammad',
    'Ovi',
   
];
// names [5] = 'Asif Mahir';
names[names.length] = 'Asif Mahir'  
// for add new iteam on last value of inside array use this mathod for better resule without any complecated(names[names.length] = 'Asif Mahir')


console.log(names.length);
console.log(names);