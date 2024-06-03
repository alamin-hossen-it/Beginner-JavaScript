let date = new Date();
let toDay = date.getDay();
let week = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Satarday' ]


switch(toDay){  
    case 0:
        console.log(`Today is ${week[0]}`);
        break
     case 1:
            console.log(`Today is ${week[1]}`);
        break
     case 2:
            console.log(`Today is ${week[2]}`);
        break
     case 3:
        console.log(`Today is ${week[3]}`);
        break
     case 4:
            console.log(`Today is ${week[4]}`);
        break
     case 5:
            console.log(`Today is ${week[5]}`);
        break
     case 6:
        console.log(`Today is ${week[6]}`)
        default:
            toDay = 'Unknow select';
}   

// console.log(typeof date)
// console.log(typeof toDay)
// console.log(typeof week)

function getDaysName(day) {
   switch(day){
      case 1 :
         return 'Monday'
      case 2 :
          return 'Tuesday'
      case 3 :
         return 'wednesday'
      case 4 :
         return 'Thirsday'
      case 5 :
         return 'friday'
      case 6 :
         return 'satarday'
      case 7 :
         return 'sunday'
         default:
            return 'unknow'
   }
}

// console.log(getDaysName(3))