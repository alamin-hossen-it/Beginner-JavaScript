for (; ;) {
    let rand = Math.floor(Math.random() * 10 + 1 )

    if (rand === 10) {
        console.log('Winner Winner Chicken Dinner')
        break
    }
    else {
        console.log(`You got ${rand} Number`)
    }

}

let n = 10;
let str =n.toString();
let str1 =new String(n);//string or number constract use this type method
console.log(n)
console.log(str1)

