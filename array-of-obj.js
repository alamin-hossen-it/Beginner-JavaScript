// const p1 = {
//     name:'HM Nayme',
//     email:'hmnaiyen@gmail.com'
// };

// const p2 = {
//     name:'SI Sumon',
//     email:'sisumon@gmail.com'
// }; 

// const p3 = {
//     name:'Javed',
//     email:'javed@gmail.com',
//     phone:'01765656543'
// };

// const people = [p1, p2, p3];
// console.log(people[0].name);
// console.log(people[1].email);


const people = [
    {
        name:'HM Nayme',
        email:'hmnaiyen@gmail.com'
    },
    {
        name:'SI Sumon',
        email:'sisumon@gmail.com'
    },
    {
        name:'Javed',
        email:'javed@gmail.com',
        friends:['alamin, Si sumon, HM Nayem, Jafor Iqbal']
    },
];

// console.log(people[0].name);
// console.log(people[1].email);
for(p of people){
    console.log(`${p.name}\n ${p.email}`)
   
    
}