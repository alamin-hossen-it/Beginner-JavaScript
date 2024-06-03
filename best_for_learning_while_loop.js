let todo = true;
while(todo){
    let rand = Math.floor(Math.random() * 10 + 1
    
    )
    if(rand === 10){
        console.log('Winner Winner Chicken Dinner')
        todo = false
    } else{
       console.log(`You got ${rand} Number` ) 
    }
    

}