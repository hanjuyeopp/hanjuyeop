window.onload = function(){
    
//================ toggle button ================// 
const toggle  = document.querySelector("#toggle_icon");
const close = document.querySelector("#close_icon")
const nav = document.querySelector(".nav");

toggle.addEventListener("click",()=>{
    nav.style.right = "0";
})
close.addEventListener("click",()=>{
    nav.style.right = "-100%";
})

//================ slider / bullet ================//
const sliderWrap = document.querySelector(".slider_wrap");
const sliderImg = document.querySelectorAll(".slider_wrap > img");
const bullet = document.querySelectorAll(".bullet > span");

//================ md's pick button /jquery로..rotat가 되어야함/================//
var mdNextBtn = document.querySelector(".md_left");
var mdPrevBtn = document.querySelector(".md_right");

var productWrap = document.querySelector(".md_product_wrap");
var products = document.querySelectorAll(".md_product");
var productCount = products.length;
var currentCount = 0;

function nextSlide(num){
    productWrap.style.left = -num*300+"px";
    currentCount = num;
}
mdPrevBtn.addEventListener("click",()=>{
    if(currentCount < productCount-3){
        nextSlide(currentCount+1);
    }
})
mdNextBtn.addEventListener("click",()=>{
    if(currentCount > 0){
        nextSlide(currentCount-1);
    }
})
// mediaquery button
var leftSmall = document.querySelector(".left428");
var rightSmall = document.querySelector(".right428");

rightSmall.addEventListener("click",()=>{
    if(currentCount < productCount-1){
        nextSlide(currentCount+1);
    }
})
leftSmall.addEventListener("click",()=>{
    if(currentCount > 0){
        nextSlide(currentCount-1);
    }
})

//================ 모바일메뉴일때 : 메뉴리스트누르면 모바일메뉴 right:0;만들기 ================//
var navLink = document.querySelectorAll(".nav_menu > a");
navLink.forEach((ele,idx)=>{
    ele.addEventListener("click",()=>{
        nav.style.right = "-100%";
    })
})


//================ dark mode ================//
const darkButton = document.querySelector("#dark_btn");
const sunTheme = "ri-sun-fill"/*const안하고 remove("ri-sun-fill")하면 잘안됨*/
darkButton.addEventListener("click",()=>{
    if(document.body.classList.contains("darkmode")){
        document.body.classList.remove("darkmode");
        darkButton.classList.remove(sunTheme);
    }else{
        document.body.classList.toggle("darkmode");
        darkButton.classList.add(sunTheme);
    }
})


//================ scrollUp ================//
var scrollUpBtn = document.querySelector(".scroll_up");
function scrollUp(){
    if(window.scrollY > 200){
        scrollUpBtn.classList.add("show_scroll_up");
    }else{
        scrollUpBtn.classList.remove("show_scroll_up");
    }
}
window.addEventListener("scroll",scrollUp);


//================ scroll reveal ================//
var SlideUp = ScrollReveal({
    delay:200,
    distance:"60px",
    origin:"top",
    duration:1500,
    // opacity:null,
    // reset:true,
})

SlideUp.reveal(".item_wrap",{interval:200});
SlideUp.reveal(".review_wrap",{interval:200});








}//end of onload