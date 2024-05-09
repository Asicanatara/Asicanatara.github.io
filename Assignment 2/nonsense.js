// script.js
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image-container img");

  images.forEach((image) => {
    image.addEventListener("click", function () {
      const audioSrc = this.getAttribute("data-audio");
      const audio = document.getElementById(audioSrc);

      if (audio) {
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
          audio.currentTime = 0;
        }
      }
    });
  });
});
