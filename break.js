
while(true){
    let rand = Math.floor(Math.random() * 10 + 1
    
    )
    if(rand === 10){
        console.log('Winner Winner Chicken Dinner')
        break
    } else{
        console.log(`You got ${rand} Number` ) 
    }
    
    
}


for (i = 1; i<=10; i++){

    if (i%5 == 0){
        break
    } else {
        console.log(i)
    }
}