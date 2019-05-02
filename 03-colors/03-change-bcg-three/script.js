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
    //var newBg= document.body.style.backgroundColor=newColor;
    
    var arr=[];//empty array
  //  var newColor= makeColor();
    

//         clickBtn.addEventListener("click",makeColor(){
//        // if clickBtn then do
        
                //loop start at [0], do this 3 times 
                var i;
                        for(i=0; i<3; i++){
                //var with math.floor (removes decimal points)and math random (pic a number 0-1)
                        var num=Math.floor(Math.random()*256);
                //array with 3 randomnumber'strings'
                        arr.push(num);
                        console.log(arr);
//         } 
 } ; 
    
        // clickBtn.addEventListener("click", showColor(){
        // function showColor()
        // var createColor= 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')';
        //         document.getElementById("rgb").innerHTML=newBg;
        // return (createColor);


})();