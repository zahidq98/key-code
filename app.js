const key = document.getElementById('head');
       const ekey = document.getElementById('ekay');
       const ecode = document.getElementById('ecode');
       const ewhich = document.getElementById('ewhich')
       const coll = document.getElementById('col1');
       const col2 = document.getElementById('col2');
       const col3 = document.getElementById('col3');
       const intro = document.getElementById('intro');

document.addEventListener('keydown', (event)=> {

   col1.style.visibility = 'visible'
   col2.style.visibility = 'visible'
   col3.style.visibility = 'visible'
   key.style.visibility = 'visible'
   intro.style.visibility = 'hidden'


  ekey.textContent = event.key;
  key.textContent = event.keyCode;
  ecode.textContent = event.code;
  ewhich.textContent = event.which;



});



/*
function keycode() {

    var key = event.keyCode;
    document.getElementById("col1").innerHTML = "ekey" + key; 

     var key = event.code;
     document.getElementById("col2").innerHTML = "ecode" + key; 

     var key = event.which;
     document.getElementById("col3").innerHTML = "ewhich" + key; 
 
} 
*/
