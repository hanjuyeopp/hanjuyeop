//jquery 
// navigation
$(function(){
    var zero = 0;
    var nav = $(".nav");
    $(document).ready(function(){
        $(window).on("scroll",function(){
            $(".nav").toggleClass("navtoggle", $(window).scrollTop() > zero);
            zero = $(window).scrollTop();
        })
    });
    // artwork
      $(function(){
            var artworkBtn = $(".artworkBtn > li");
            var imageWrap = $(".artworkImageWrap");
            artworkBtn.on("click",function(){
                var $this = $(this);
                var index = artworkBtn.index(this);
                artworkBtn.removeClass("checked");
                $this.addClass("checked");
                imageWrap.removeClass("tap");
                imageWrap.eq(index).addClass("tap");
            })
        });
})//jquery




window.onload = function () {
    // circle
      var section = document.querySelector("section");
    window.addEventListener("scroll", e => {
        var value = window.scrollY;
        section.style.clipPath = `circle(${value}px at center center)`
    })
    // parallax
    var reveal = document.querySelectorAll(".reveal");
    console.log(reveal);
    function revealed() {
        reveal.forEach((elements, idx) => {
            var elePos = elements.getBoundingClientRect().top;
            if (elePos < window.innerHeight / 1.3) {
                elements.classList.add("revealed");
            }
        })
    }
    window.addEventListener("scroll", revealed);

    // skillbar
     var percent = document.querySelectorAll(".percent");
        var percentArr = ["50%", "70%", "60%", "60%", "70%", "40%"];

        function skill() {
            percent.forEach((per, ind) => {
                var perPos = per.getBoundingClientRect().top;
                if (perPos < window.innerHeight / 1.3) {
                    per.style.width = percentArr[ind];
                    per.classList.add("revealed")
                }
            });
        }
        window.addEventListener("scroll", skill);

        //scroll_button
        var scrollbtn = document.querySelector(".scroll_btn");
        console.log(scrollbtn);
        window.addEventListener("scroll",e=>{
            scrollbtn.classList.add("hidden")
            if(window.scrollY < 10){
                scrollbtn.classList.remove("hidden");
            }
        })

}//javascript


