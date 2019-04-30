/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    var i;
    for (i=1; i <101;i++ ){
                    console.log(i);
                if (i%3===0 && i%5===0){
                        console.log("" + "fizzbuzz");
                        continue;
                }
                if(i % 3==0){
                    console.log("" + "fizz");
                }    
                if (i%5==0){
                    console.log("" + "buzz" );
                }   
                
                              
            }

})();