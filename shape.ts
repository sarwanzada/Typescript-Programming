
                   // printing the triangle downwards "Decreasing triangle"
               

// let output: string = '';

// for (let i=0; i<3; i++){

//     for(let j=i; j<3; j++)
//     {

//         output += '*';

//     }
//     output += '\n';
    
// }
// console.log(output);








                    // printing triangle upwards "Increasing triangle"
  
//   let output: string = '';

// for (let i=0; i<3; i++){

//     for(let j=0; j<=i; j++)
//     {
//         output += '*';
//     }
//     output += '\n';   
// }
// console.log(output);








    // printing tringle from left to right downwards " decreasing triangle ""

//     let output: string = '';

//  for (let i=0; i<=3; i++){

//      for(let j=i; j<=3; j++)
//      {
//          output += ' ';
//      }
     
//      for(let k=0; k<=i; k++)
//         {
//             output += '*';
//         }
//      output += '\n';    
//  }
//  console.log(output);







                         // pattern 1 
// *
// **
// ***
// ****
// *****

// console.log("               Pattern 1  Printing triangle downwards ascending to descending         ")
// let output: string = '';

// for(let i =1; i<5; i++)
//     {

//     for(let j=1; j<=i; j++)
//         {
//             output += ' * ';

//     }
//     output += '\n';
    
// }
// console.log(output);






                              // pattern 2
// *****
// ****
// ***
// **
// *

// console.log("               Pattern 1  Printing triangle downwards descending to  ascending         ")

// let output: string = '';

// for(let i =5; i>=1; i--)
//     {

//     for(let j=0; j<i; j++)
//         {
//             output += ' * ';

//     }
//     output += '\n';
    
// }
// console.log(output);






//         printing  pyramid

//                       *
//                     *   *
//                    *  *   *
//                  *  *   *   *
//                *   *   *  *   *



// console.log(`Printing  pyramid`);

// let output: string = '';


// for (let i = 1; i <= 5; i++) {
    
//     for (let j = 5 - i; j > 0; j--) {
//         output += ' ';
//     }
    
//     for (let k = 1; k <= i; k++) {
//         output += '* ';
//     }
    
//     output += '\n';
// }

// console.log(output);






 //       printing pyramid pattern 2

 //                   *  * * *  *
 //                     * * * *              
 //                      * * *
 //                       * *
 //                        *



console.log(`Printing a right triangle pyramid `);
let output: string = '';

for (let i = 5; i > 0; i--) {
   
    for (let j = 5 - i; j > 0; j--) {
        output += ' ';
    }
    
    for (let k = 1; k <= i; k++) {
        output += '* ';
    }
    
    output += '\n';
}

console.log(output);


 
