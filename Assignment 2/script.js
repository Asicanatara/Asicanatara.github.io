document.addEventListener("DOMContentLoaded", function (event) {
  // Getting the elements
  const $ = (s) => document.querySelector(s);
  const container = $(".media-player");
  const videoElement = $("video");
  const largePlay = $(".large-circle-button");

  console.log(container);

  largePlay.onclick = () => {
    // Start the video

    videoElement.play();

    // Update the UI

    container.setAttribute("is-playing", "true");
    videoElement.setAttribute("controls", "true");

    // Bind keyboard shortcuts after we play, controls dont exist yet

    window.addEventListener("keydown", (e) => {
      // [f] Toggle fullscreen
      if (e.key.toLowerCase() == "f") {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          videoElement.requestFullscreen();
        }
      }

      // [m] Toggle mute
      if (e.key.toLowerCase() == "m") {
        videoElement.muted = !videoElement.muted;
      }
    });
  };
});

const box = document.getElementById("expandableBox");

box.addEventListener("click", function () {
  this.classList.toggle("expand");
});
