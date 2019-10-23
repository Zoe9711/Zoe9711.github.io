jQuery(document).ready(function(){
    typeWriter();
});

var i = 0;
var txt = 'Hey, this is Zoe.'; 
var speed = 50; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementsByClassName('transparent-1').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


