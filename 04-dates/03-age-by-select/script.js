/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

var Btn= document.getElementById("run");
var birthDay=document.getElementById("dob-day");
var birthMonth=document.getElementById("dob-month");
var birthYear=document.getElementById("dob-year");
var birthWrite= document.getElementById("birth-date");
var d = new Date; 


Btn.addEventListener("click",function(){

birthWrite.innerHTML= birthDay.value +" " + birthMonth.value + " " + birthYear.value
var age= d.getFullYear() - birthYear.value
document.getElementById("calculate").innerHTML= "U bent" + " " + age + " " + "jaar oud."  ;

});

//bereken datum 






})();
