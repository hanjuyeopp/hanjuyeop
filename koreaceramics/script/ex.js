window.onload = function(){

var prev = document.querySelector(".left");
var next = document.querySelector(".right");
var wrap = document.querySelector(".wrap");
var boxs = document.querySelectorAll(".box");
var boxCount = boxs.length;
var currentIndex = 0;
console.log(prev);
function nextSlide(num){
    wrap.style.left = -num*300+"px";
    currentIndex=num;
}

next.addEventListener("click",function(){
    if(currentIndex < boxCount){
        nextSlide(currentIndex+1);
    }
})

}