document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel-inner img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const playButtons = document.querySelectorAll('.play');

  let currentIndex = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          if (i === index) {
              slide.style.transform = 'translateX(0)';
          } else {
              slide.style.transform = 'translateX(-100%)';
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

  function playAudio(audioId) {
      const audio = document.getElementById(audioId);
      audio.currentTime = 0;
      audio.play();
  }

  playButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
          const audioId = 'audio' + (index + 1);
          playAudio(audioId);
      });
  });

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
});
