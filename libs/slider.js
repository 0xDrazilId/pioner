let slides = document.querySelectorAll('#slider .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,5000);
let next = document.getElementById('next_btn');
let prev = document.getElementById('prev_btn');

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide current';
}

function prevSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide-1)%slides.length;
    slides[currentSlide].className = 'slide current';
}

next.onclick =  function() {
    nextSlide();
}

prev.onclick = function() {
    prevSlide();
}
