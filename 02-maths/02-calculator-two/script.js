/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    var x= document.getElementById("op-one").value;
    var y= document.getElementById("op-two").value;
    var add= document.getElementById("addition");
    var substract=document.getElementById("substraction");
    var multiply= document.getElementById("multiplication");
    var divide= document.getElementById("division");
    var result=(x!==NaN && (y!==NaN));
    
    
    var performOperation = function(operation) {
        // perform the operation
  
        switch (result){
            case add:
            document.getElementById("enter").innerHTML= (parseInt(x) + parseInt(y));
            break;
            case substract:
            document.getElementById("enter").innerHTML= (parseInt(x) - parseInt(y));
            break;
            case multiply:
            document.getElementById("enter").innerHTML=(parseInt(x) * parseInt(y));
            break;
            case divide:
            document.getElementById("enter").innerHTML=(parseInt(x) / parseInt(y));
            break;
            default:
            (x=="NaN" && y=="NaN")
                document.getElementById("enter").innerHTML="no values detected"
            }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();