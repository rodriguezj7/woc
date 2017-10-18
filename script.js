let info = $('.proj2');
let more = $('.show')
let y = 0; 
let x = 0;
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}



// on click add id show to specific div and show hidden div
// function expressions can not be called before actual expression since they are not hoisted
$(document).ready(function(){
    $(".show").click(function(){
        let target = $(this).siblings('.proj2');
        target.toggle();
    });
},1000);
info.hide();