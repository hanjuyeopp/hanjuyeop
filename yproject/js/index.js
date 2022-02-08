window.onload = function(){

    // *******************************nav_scroll********************************
    var navBar = document.querySelector(".navbar");
    var navText = document.querySelectorAll(".navbar_menu > li >a");
    var logo = document.querySelector(".logo > a > img");
    var logoSrc = logo.getAttribute("src");
    console.log(logoSrc);
   window.addEventListener("scroll",(e)=>{
       navBar.classList.toggle("sticky", window.pageYOffset > 0)
   })

   // *******************************toggle_btn********************************
    var toggleBtn = document.querySelector(".toggle_btn");
    var icon = toggleBtn.querySelector(".fa-bars");
    var navMenu = document.querySelector(".navbar_menu");
    var navbar = document.querySelector(".navbar");
   
    toggleBtn.addEventListener("click",()=>{
        if(icon.classList.contains("fa-bars")){
            icon.classList.replace("fa-bars","fa-times");
        }else{
            icon.classList.replace("fa-times","fa-bars");
        }
        navMenu.classList.toggle("active");
        navbar.classList.toggle("bgc");
    })
    
    
    // *******************************mainpage_line********************************
    
    
    
    
    // *******************************collaboration_text********************************
    var text = document.querySelectorAll("span");
    var textContainer = document.querySelector(".coll_text");
    // window.addEventListener("scroll",()=>{
    //     text.forEach((ele,idx)=>{
    //         var eleTop = ele.getBoundingClientRect().top;
    //         if(eleTop < window.innerHeight/1.3){
    //             ele.classList.add("re");
    //         }
    //     })
    // })

    function textRe(){
        text.forEach((ele,idx)=>{
                    var containerTop = textContainer.getBoundingClientRect().top;
                    var eleTop = ele.getBoundingClientRect().top;
                    console.log(eleTop+"eletop");
                    if(containerTop < window.innerHeight/1){
                        ele.classList.add("re");
                        ele.style.top = "0";
                        ele.style.left = "0";
                        ele.style.opacity = "1";
                    }
                })
    }
window.addEventListener("scroll",textRe);











    
}