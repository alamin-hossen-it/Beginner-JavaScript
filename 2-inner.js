function displayTable(n) {
    const isOdd = (n) => n % 2 !== 0;
    const isEven = (n) => n % 2 === 0;

    for (let i = 0; i < n; i++) {
        if(isOdd(i)) {
            console.log('Table Row [#000] - ', i + 1);
        } else if (isEven(i)) {
            console.log('Table Row [#fff] - ', i + 1);
        }
    
    }
 
}

displayTable(10);