// Synchronous Way//

function display (name, age) {
  console.log(name, 'Hi, Log in succesfully your age is', age)
}

function massage (name, age, display) {

    display (name, age)

}

massage('Alamin', 23, display);
massage('Monirul Islam', 25, display);