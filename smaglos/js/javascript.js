const checkpoint = 300; //Toppen af siden
 
window.addEventListener("scroll", () => { //Event på når man scroller
  const currentScroll = window.pageYOffset; // Når man scroller ned af og ikke hen
  if (currentScroll <= checkpoint) { 
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0; // Hvis du scroller højere end checkpoint som er toppen, så er pilen synlig, hvis du scroller ned forsvinder den
  }
  document.querySelector(".arrow").style.opacity = opacity;
});


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // skifer billede hvert andet sekund
}

$(document).ready(function(){
  $(window).scroll(function(){
      // sticky navigation når man scroller
      if(this.scrollY > 20){
          $('.menubar').addClass("sticky");
      }else{
          $('.menubar').removeClass("sticky");
      }
      
      // scroll-up knap viser og gemmer script
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  })});