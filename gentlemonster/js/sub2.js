window.onload = function(){
    var viewmore = document.querySelectorAll(".viewmore");
var img = document.querySelectorAll(".viewmore > img");
var title = document.querySelectorAll(".viewmore >h2");
var text = document.querySelectorAll(".viewmore >p");

var viewNow = document.querySelectorAll(".viewNow");
console.log(viewNow);

viewmore.forEach((ele,idx)=>{
ele.addEventListener("mouseenter",(e)=>{
  ele.style.height = "430px";
  img[idx].style.marginTop = "50px";
  img[idx].style.width = "300px";
  // title[idx].style.marginTop = "20px";
  // 안됌
  // text[idx].classList.add("bestHover");
  viewNow[idx].classList.add("bestHover");
  
})
ele.addEventListener("mouseleave",(e)=>{
  ele.removeAttribute("style");
  img[idx].style.width = "250px";
  img[idx].style.marginTop = "40px";
  viewNow[idx].classList.remove("bestHover");
  // text[idx].classList.remove(".bestHover")
})
})

}