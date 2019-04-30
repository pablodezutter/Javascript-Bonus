/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

   
var age= prompt("What is your age?");
var gender= prompt("What is your gender?");
var location= prompt("Where do you live?");
var i = [age, gender, location]

for(){

if (age !== null && age !==""){
console.log("true");
}
if(gender !==null && gender!==""){
console.log("also true");
}
if(location !==null && location!==""){
confirm("Is this correct?" + age + gender + location );

}else{
    (confirm === false )
   // console.log("doitagain");
    var age= prompt("What is your age?");
    } 
}






})();