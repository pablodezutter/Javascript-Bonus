/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
var groet;
var d= new Date();
var hours= d.getHours();


    // your code here
  
window.onload = (event) => {
  console.log('page is fully loaded');
  if (hours <18) {
      hours="Goodmorning";
    }else{
    hours= "Goodevening";
}

  document.getElementById("target").innerHTML=hours;
  document.getElementById("target").style.fontsize= "xx-large";
}
       



})();