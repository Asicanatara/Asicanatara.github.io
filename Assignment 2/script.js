document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-inner .slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function playAudio(audioSrc) {
        const audio = document.getElementById('audio');
        audio.src = audioSrc;
        audio.play();
    }

    const playButtons = document.querySelectorAll('.play');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const audioSrc = this.getAttribute('data-audio');
            playAudio(audioSrc);
        });
    });

    showSlide(currentIndex);

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
});
