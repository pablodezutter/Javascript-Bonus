/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    
    var clickBtn= document.getElementById("run");
    var i;
    var arr=[];//empty array
    var newColor= 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] +',)';

    run.addEventListener("click", () => {
       // if clickBtn then do
        
//loop start at [0], do this 3 times 
        for(i=0;i<3;i++){
//var with math.floor (removes dec points)and math random (pic a number 0-1)
            var num=Math.floor(Math.random()*256);
//array with 3 randomnumber'strings'
            arr.push(num);
        }

        });
})();