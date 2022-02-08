// $(function(){
//   var $next = $(".next");
//   var $prev = $(".prev");
//   var $slide =$(".viewmore_image_wrap");
//   var duration = 400;
  
//  function slideImg(){
//     $slide.
//  }
//   $next.on("click",slideImg);
// })//jQuery




window.onload = function(){
  // 3d effect
    var mainWrap = document.querySelector(".mainWrap");
    var text = document.querySelector(".mainWrap > h2");
    var imgs = document.querySelectorAll(".mainWrap > img");
    var container = document.querySelector(".container");
    var nav = document.querySelector(".nav");
   function mousemove(e){
       let xPos = (window.innerWidth / 2 - e.pageX) / 25;
       let yPos = (window.innerHeight / 2 -e.pageY) / 25;

       mainWrap.style.transform = `rotateX(${-yPos}deg)  rotateY(${xPos}deg)` ;
   }
   
   function mouseenter(){
       mainWrap.style.transitionDuration = "0ms";
       text.style.transform = "translate(-50%,-50%) translateZ(300px)";
           imgs[0].style.transform = "translateZ(200px)"
           imgs[1].style.transform = "translateZ(-20px)";
           imgs[2].style.transform = "translateZ(90px)";
           imgs[3].style.transform = "translateZ(-90px)";
           imgs[4].style.transform = "translateZ(70px)";
   }
   container.addEventListener("mousemove",mousemove);
   container.addEventListener("mousemove",mouseenter);
   container.addEventListener("mouseleave",(e)=>{
        mainWrap.style.transform = `rotate(0)`;
        mainWrap.style.transitionDuration = "500ms";
   })

//////제품 더보기 후버효과
var viewmore = document.querySelectorAll(".viewmore");
var img = document.querySelectorAll(".viewmore > img");
var title = document.querySelectorAll(".viewmore >h2");
var texts = document.querySelectorAll(".viewmore >p");

var viewNow = document.querySelectorAll(".viewNow");

viewmore.forEach((ele,idx)=>{
ele.addEventListener("mouseenter",(e)=>{
  ele.style.height = "430px";
  img[idx].style.marginTop = "50px";
  img[idx].style.width = "300px";
  // title[idx].style.marginTop = "20px";
  // 안됌
  // texts[idx].classList.add("bestHover");
  viewNow[idx].classList.add("bestHover");
  
})
ele.addEventListener("mouseleave",(e)=>{
    ele.removeAttribute("style");
    img[idx].style.width = "250px";
    img[idx].style.marginTop = "40px";
    img[idx].style.transform = "rotate(0deg)";
  viewNow[idx].classList.remove("bestHover");
  // texts[idx].classList.remove(".bestHover")
})
})

// hide&seek ImageChange
// hide&seek ImageChange
 var eventImgWrap = document.querySelector(".event_image_wrap");
 var eventImgs = document.querySelectorAll(".event_image_wrap>li")
 var eventImgCount = eventImgs.length;
var currentImgIndex = 1;
  
function eventSlide(num){
  eventImgWrap.style.left = -num * 450 +"px";
  currentImgIndex = num;
}

window.setInterval(function(){
  eventSlide(currentImgIndex+1);
  if(currentImgIndex > eventImgCount-2){
    currentImgIndex = 0;
  }
},180);

// revealed
// revealed
 var reveal = document.querySelectorAll(".reveal");
  var revealRight = document.querySelectorAll(".reveal_right")
var revealLeft = document.querySelectorAll(".reveal_left");
  function revealed() {
    reveal.forEach((ele, idx) => {
      var revealPos = ele.getBoundingClientRect().top;
      console.log(revealPos);
      if (revealPos < window.innerHeight / 1.3) {
        ele.classList.add("revealed");
      }
    })
  }

function rightReveal(){
    revealRight.forEach((ele,idx)=>{
      var rightPos = ele.getBoundingClientRect().top;
      if(rightPos < window.innerHeight/1.3){
        ele.classList.add("revealed");
      }
    })
}

function leftReveal(){
    revealLeft.forEach((ele,idx)=>{
      var leftPos = ele.getBoundingClientRect().top;
      if(leftPos < window.innerHeight/1.3){
        ele.classList.add("revealed");
      }
    })
}

window.addEventListener("scroll",revealed);
window.addEventListener("scroll",rightReveal);
window.addEventListener("scroll",leftReveal);


}//end






function slide(){
    var value = document.getElementById("slider").value;//50
    var img = document.querySelector(".slide_2");
    img.style.clipPath = "polygon(0 0," +value + "% 0, " + value + "% 100%, 0 100%)";
}