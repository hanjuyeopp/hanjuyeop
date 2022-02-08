window.onload = function(){
// *******************main_text_effect************************************
    var text = document.querySelector(".main_text_1");
    var text2 = document.querySelector(".main_text_2");
    window.addEventListener("scroll",function(){
        // var scroll = window.scrollY;
        // text.style.top =`${scroll}px`;
        // text2.style.top = `${scroll}px`;
    })




// *******************nav_scroll************************************
var navBar = document.querySelector(".navbar");
window.addEventListener("scroll",()=>{
    navBar.classList.toggle("sticky", window.scrollY > 0)
})


// *******************toggleBtn_Click************************************
var toggleBtn = document.querySelector(".toggle_btn");
var icon = document.querySelector(".fa-bars");
var nav = document.querySelector(".navbar_menu");
var navItem = document.querySelectorAll(".navbar_menu > li > a")
toggleBtn.addEventListener("click",()=>{
    if(icon.classList.contains("fa-bars")){
        icon.classList.replace("fa-bars","fa-times");
    }else{
        icon.classList.replace("fa-times","fa-bars");
    }
    nav.classList.toggle("active");  
    navBar.classList.toggle("bgc");
})

}