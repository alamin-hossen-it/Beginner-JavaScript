        //Anonymous Function In Javascript//


//Example 1
        // let sum = function (a, b){
        //     return a*b;
              
        // }
    //   console.log( sum(20, 30))


//Example 2

             //self invocked anonymous
     ( function(){
        console.log("Wwlcome Alamin Hossen"); 
     })();

//Example 3



            //do anonymous with arrow
 setTimeout(() => {
    console.log('I will run after 3 second')
}, 3000);


           //pure anonymous function


setTimeout(function () { 
    console.log('I will run after 5 second')
}, 5000);