const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 
  
hamburger.addEventListener('click', function () { 
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    } 
    else { 
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    } 
}); 

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const totalSlides = slides.length;

    function showNextSlide() {
        slides[currentSlide].style.opacity = 0;
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].style.opacity = 1;
    }

    slides[currentSlide].style.opacity = 1;
    setInterval(showNextSlide, 5000); 
});