window.onload = function(){

    // main_1
    var sunImage = document.querySelector(".sunImage");
    var caseImage = document.querySelector(".caseImage");
    window.addEventListener("scroll",e=>{
        var imgPos = sunImage.getBoundingClientRect().top;
        var casePos = caseImage.getBoundingClientRect().top;
        var ypos = window.scrollY;
      // 안경다리 삐져나오면 그냥 없애기...
      //   sunImage.style.transform = `rotate(10deg)`
      //   sunImage.style.transitionDuration = "600ms"
      
      if(ypos>400){
          // sunImage.style.transform="rotate(0deg)"
          //   sunImage.style.transitionDuration = "600ms"
          }
        if(ypos===0){
            sunImage.removeAttribute("style");
        }
        if(imgPos > casePos){
            sunImage.classList.add("sunglass_none");
            sunImage.style.transitionDuration = "0ms"
          } else if(imgPos<casePos){
              sunImage.classList.remove("sunglass_none");
              // 스크롤위로올리는건 모두 듀레이션 ㅠㅠ
              // sunImage.style.transitionDuration = "700ms"

          }
          else{
              sunImage.classList.remove("sunglass_none");
          }
          
        
    })
    



// bestItem_hover기능
    var bestItem = document.querySelectorAll(".bestItem");
      var img = document.querySelectorAll(".bestItem > img");
      var title = document.querySelectorAll(".bestItem >h2");
      var text = document.querySelectorAll(".bestItem >p");
      
      var bestBtn = document.querySelectorAll(".bestBtn");

bestItem.forEach((ele,idx)=>{
    ele.addEventListener("mouseenter",(e)=>{
        ele.style.height = "400px";
        img[idx].style.marginTop = "50px";
        img[idx].style.width = "300px";
        // title[idx].style.marginTop = "20px";
        // 안됌
        // text[idx].classList.add("bestHover");
        bestBtn[idx].classList.add("bestHover");
        
    })
    ele.addEventListener("mouseleave",(e)=>{
        ele.removeAttribute("style");
        img[idx].style.width = "250px";
        img[idx].style.marginTop = "40px";
        bestBtn[idx].classList.remove("bestHover");
        // text[idx].classList.remove(".bestHover")
    })
})

// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************

//next_prev_btn
var bestPrev = document.querySelector(".bestBtnPrev");
var bestNext = document.querySelector(".bestBtnNext");
var bestImageWrap = document.querySelector(".bestImageWrap");
var bestItmes = document.querySelectorAll(".bestItem");
var bestItemCount = bestItmes.length;
var currentIndex = 0;//1이면 처음에 두번넘어가버림!

function nextSlide(num){
    bestImageWrap.style.left = -num*420+"px";
    currentIndex=num
}

bestNext.addEventListener("click",function(){
    if(currentIndex < bestItemCount-3){
        nextSlide(currentIndex+1);
    }
});

bestPrev.addEventListener("click",function(){
    if(currentIndex > 0){
        nextSlide(currentIndex-1);
    }
});
//bestItem button



// reveal
var reveal = document.querySelectorAll(".reveal");
console.log(reveal);
function revealed(){
    reveal.forEach((ele,ind)=>{
        var elePos = ele.getBoundingClientRect().top;
        if(elePos < window.innerHeight/1.3){
            ele.classList.add("revealed");
        }
    })
}

window.addEventListener("scroll",revealed);
// reveal

// collection_next_prev_btn
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var collImageWrap = document.querySelector(".coll_imageWrap");
var images = document.querySelectorAll(".coll_imageWrap > img");
var imageCount = images.length;//4
var currentIdx = 0;
// -500px씩이동

function slideImage(num){
    collImageWrap.style.left = -num*500+"px";
    collImageWrap.style.transitionDuration="400ms";
    currentIdx = num;
    
}

nextBtn.addEventListener("click",e=>{
    if(currentIdx < imageCount-1){
        slideImage(currentIdx+1);
    }
})
prevBtn.addEventListener("click",e=>{
    if(currentIdx > 0){
        slideImage(currentIdx-1);
    }
    console.log(currentIdx);
})






}//end of js

