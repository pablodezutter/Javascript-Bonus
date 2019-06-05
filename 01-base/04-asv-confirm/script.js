/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (function() {

//     // your code here

   
// var age= prompt("What is your age?");
// var age_important=prompt("Don't worry. Your data is safe. What is your age?");
// var gender= prompt("What is your gender?");


// if (age !== ""){
//     return gender;
// }else if(age_important !== ""){
//        return gender;
// }
//         else if(age!==""){
//         return gender;
//         }else{
//         return prompt("please refresh");
// }


// if(gender !== ""){
//     var location=prompt("Where do you live?");
// }else{
//     var gender_important=prompt("No worries man. We handle your data with care. What is your location?");
//         if(gender_important !== " "){
//         alert("Thank you" + age + gender + location);   

//         }else{
//         return age;

//         }
//     }
// })();

//My interpretation:
//I need three prompt 
//The user needs to fill the prompt 
// if the prompt is not filled then ask again
// if it is filled go to the next prompt


//The question:
//ask three questions 
//display a dialog box
//ask to confirm
//if not confirmed, reload the process

(function() {

    // your code here

   
var age= prompt("What is your age?");
var gender= prompt("What is your gender?");
var location= prompt("What is your location?");
var r= confirm(age + gender + location);

if (r==true){
return("thank you" + age + gender + location);

}else{
location.reload();

}



})();


