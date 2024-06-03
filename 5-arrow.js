// const sum = (a, b) =>console.log('A+B=', a+b);
// sum(20,30);
// sum(100, 500);
// sum(300, 500);

let display = (a, b) => {
    
    return (`Hi, ${a} hossen your result is ${b}.`)
   
}

console.log(display('Alamin', 4.97));
console.log(display('sumon', 3.97));




let student = [
    {
        id: 101,
        name: 'Alamin Hossen',
        result: 3.76
    },
    {
        id: 102,
        name: 'SI Sumon Hossen',
        result: 2.76
    },
    {
        id: 103,
        name: 'Kamrul Hossen',
        result: 4.76
    },
    {
        id: 104,
        name: 'Sihad Hossen',
        result: 3.96
    },
    {
        id: 105,
        name: 'Israfil Hossen',
        result: 2.50
    },
]

function student1 () {
    return student.filter(function(x){
      return  x.result > 3
    }).map(function(y) {
       return y.name
       
    });

}

const student2 = () => student.filter( (x) => x.result > 3).map((y) => y.name)


console.log(student1()); // console.log(for treditional fanction)

console.log(student2()); // console.log(arrow function short code batter understand genius programmer use arrow function)



function add (num1, num2) {
    return num1 + num2
}
console.log(add(3,4))