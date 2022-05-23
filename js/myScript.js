var slide= document.getElementById("slider");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");

btn1.onclick = function(){
   slide.style.transform = "translateX(0px)";
} 
btn2.onclick = function(){
   slide.style.transform = "translateX(-220%)";
} 
btn3.onclick = function(){
   slide.style.transform = "translateX(-440%)";
} 
btn4.onclick = function(){
   slide.style.transform = "translateX(-650%)";
}
btn5.onclick = function(){
   slide.style.transform = "translateX(-860%)";
}
btn6.onclick = function(){
   slide.style.transform = "translateX(-1080%)";
}