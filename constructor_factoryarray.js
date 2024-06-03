/**tittle initialize array - constructor & factory Array
 */
/**
 * Construtor Pattern */
 const a1 = new Array (); //[] both are same.
 console.log(a1, a1.length);
  
 const a2 = new Array (5);
 console.log(a2, a2.length); 

 const a3 = new Array (1, 2, 3, 4, 5);
 console.log(a3, a3.length);

 // Factory Pattern //

 const b1 = Array (); 
 console.log(b1, b1.length);
  
 const b2 = Array (5);
 console.log(b2, b2.length); 

 const b3 = Array (1, 2, 3, 4, 5);
 console.log(b3, b3.length);