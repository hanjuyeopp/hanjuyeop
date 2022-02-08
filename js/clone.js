window.onload = function(){

    // ============show menu===========//
    const navMenu = document.querySelector("#nav_menu");
    const navToggle = document.querySelector("#nav_toggle");
    const navClose = document.querySelector(".nav_close");
    
    // =============menu show===========//
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show_menu");
    })
    
    // ============menu hidden==========//
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show_menu");
    })
    
    // ============remove menu mobile===========//
    const navLink = document.querySelectorAll(".nav_link");
    function LinkClick(){
        navMenu.classList.remove("show_menu");
    }
    navLink.forEach((ele,idx)=>{
        ele.addEventListener("click",LinkClick);
    })
    
    // ============change backgounrd header(shoadow)===========//
    function scrollHeader(){
        const header = document.querySelector(".header");
        if(this.scrollY > 0){
            header.classList.add("scroll_header")
        }
        else{header.classList.remove("scroll_header");}
    }
    window.addEventListener("scroll",scrollHeader);

    // // ============question accordian===========//
    // // 이해안됨 ㅜㅜㅜㅜ
    // const accordianItem = document.querySelectorAll(".question_item");
    // accordianItem.forEach((item)=>{
    //     const accordianHeader = item.querySelector(".question_header");
    //     accordianHeader.addEventListener("click",()=>{
    //         const openItem = document.querySelector(".accordian-open")
    //         toggleItem(item);
    //         // ****
    //         //if(openItem !== item) 해도 동일함/!=
    //         if(openItem && openItem!== item){
    //             // 이해좀....
    //             toggleItem(openItem);
    //         }
    //     })
    // })
    // // function toggleItem(item){...}이랑 동일함.
    // const toggleItem = (item)=>{
    //     const accordianContent = item.querySelector(".question_content");
    //     if(item.classList.contains("accordian-open")){
    //         accordianContent.removeAttribute("style");
    //         item.classList.remove("accordian-open");
    //     }else{
    //         // ****
    //         accordianContent.style.height = accordianContent.scrollHeight+"px";
    //         item.classList.toggle("accordian-open");
    //     }
    // }


    // ============question accordian2222222222===========//
    
    const accordianItem = document.querySelectorAll(".question_item");
    // const accordianHeader = document.querySelectorAll(".question_header");
    accordianItem.forEach((item)=>{
        const accordianHeader = item.querySelector(".question_header");
        // const accordianContent = item.querySelector(".question_content");
        accordianHeader.addEventListener("click",()=>{
            // 다른 헤더클릭하면 모든 아코디언컨텐츠 스타일 없애고
            //헤더에 아코디언오픈클래스있으면 다없애고 클릭한 헤더의컨텐츠만 토글클래스
            const openItem = document.querySelector(".accordian-open");
            openAccordian(item);
            if(openItem!=item){//이거있어야 완벽해짐..이해...x
                openAccordian(openItem);
            }
            
        })
    })
    
    const openAccordian=(item)=>{
        const accordianContent = item.querySelector(".question_content");
        if(item.classList.contains("accordian-open")){
            //item 이면안됌......
            accordianContent.removeAttribute("style");
            item.classList.remove("accordian-open");
        }else{
            accordianContent.style.height = accordianContent.scrollHeight+"px";
            //scrollHeight = padding포함한 element높이
            item.classList.toggle("accordian-open");
        }
    }


// ============scroll section active link===========//
const sections = document.querySelectorAll('section[id]');
function scrollActive(){
    const scrollY = window.pageYOffset;
    sections.forEach((current)=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop-60;
        const sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.add("active_link");
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.remove("active_link");
        }
    })
}
window.addEventListener("scroll", scrollActive);


    // ============show scroll up ===========//
    // .scrollup btn 을 bottom-30%해준다
    function scrollUp(){
        var scrollUp = document.querySelector(".scrollup");
        if(this.scrollY > 200){
            scrollUp.classList.add("show_scroll_up");
        }else{
            scrollUp.classList.remove("show_scroll_up");
        }
    }

window.addEventListener("scroll",scrollUp);


// // ============dark light theme ===========//
// const themeButton = document.querySelector("#theme_btn");
// const darkTheme ='dark-theme'
// const iconTheme ='ri-sun-line'

// // priviously seleted topic(if user seleted)
// const seletedTheme = localStorage.getItem("seleted-theme");
// const seletedIcon = localStorage.getItem("seleted-icon");

// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
    
// if(seletedTheme){
//     document.body.classList[seletedTheme==='dark' ? 'add' : 'remove'](darkTheme);
//     themeButton.classList[seletedIcon ==="ri-moon-line" ? 'add' : 'remove'](iconTheme);
// }

// themeButton.addEventListener("click",()=>{
//     document.body.classList.toggle(darkTheme);
//     themeButton.classList.toggle(iconTheme);
//     //
// })





// ============ dark light theme (easy-mode) ===========//
const themeButton = document.querySelector("#theme_btn");
const darkTheme ='dark-theme'
const iconTheme ='ri-sun-line'

themeButton.addEventListener("click",()=>{
    if(document.body.classList.contains(darkTheme)){
        document.body.classList.remove(darkTheme);
        themeButton.classList.remove(iconTheme);
    }else{
        document.body.classList.toggle(darkTheme);
        themeButton.classList.add(iconTheme);
    }
})

// ============ scroll reveal animation api에 적어져있음 (다양한요소를 간단하게 적을수있음)===========//
var slideUp = ScrollReveal({
    distance: '60px',
    origin: 'top',
    duration:1500,
    delay:200,
    // reset: true
})

slideUp.reveal('.home_data')
slideUp.reveal('.home_img',{delay:500});
slideUp.reveal('.home_social',{delay:700});
slideUp.reveal('.about_img',{origin:'left'});
slideUp.reveal('.about_data',{origin:'right'});
slideUp.reveal('.steps_card, .product_card',{interval:100});
slideUp.reveal('.question_group',{interval:100});





// ============ scroll reveal animation222 (깃헙에 나온방식) ===========//

// var slideUp = {
//     distance: '60px',
//     origin: 'top',
//     delay:400,
//     duration:2500,
//     interval:400,
// };
// var nodeArray = [
//     document.querySelector('.home_data'),
//     document.querySelector('.home_img'),
//     document.querySelector('.home_social')
// ];

// ScrollReveal().reveal(nodeArray, slideUp);




}//end of window.onload
