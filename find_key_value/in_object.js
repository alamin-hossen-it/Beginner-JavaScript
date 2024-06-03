let obj = {
    Names: 'Alamin Hossen',
    Age: 23,
    "Date Of Birth":'16-11-2000',
    Education: 'HSC Compleate',
    Working: 'Backend Developer',
    Experiance:'4 Years'

}


// console.log(obj.Education)
// console.log(obj['Education'])

for(i in obj){
    console.log(i + ' :')
    console.log(obj[i]+'.')
}