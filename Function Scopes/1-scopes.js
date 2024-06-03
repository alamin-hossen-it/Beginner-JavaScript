let globalVariable = 'Global Value';

function OuterFunction() {
    let scopedVariable = 'Scoped Value';
   



function innerFunction(){
    let innerVariable = 'Inner Value';
    console.log(scopedVariable);
}

innerFunction();
}

OuterFunction();