const videoList = [
  { name: "Ticking Away - Valorant, bbno$ and Grabbitz", link: "TickingAway.mp3" },
  { name: "Die For You - Valorant and Grabbitz", link: "DieForYou.mp4" },
];

let loop = false;
//allows the media to be played
document.addEventListener("DOMContentLoaded", function (event) {

  const container = document.querySelector(".media-player");
  const videoElement = document.querySelector("video");
  const largePlay = document.querySelector(".large-circle-button");
  const videoName = document.querySelector("#video-name");
  const myVideo = document.querySelector("#TickingAway");
  const videoTime = document.querySelector("#video-time");
  const progressBar = document.querySelector("#progress-bar-fill");
  const firstVideoButton = document.querySelector("#first-video-btn");
   const secondVideoButton = document.querySelector("#second-video-btn");
  console.log(container);

  firstVideoButton.addEventListener("click", function playIt() {
    myVideo.pause();
    playVideo(0);
  });
 
secondVideoButton.addEventListener("click", function playIt() {
  myVideo.pause();
  playVideo(1);
});

  myVideo.addEventListener("timeupdate", updateProgressBar);
 

  // large play is the defined term I used to describe the giant play button on the screen.
  // This signifies that when I click the video on the screen in general, the video plays or pauses
  largePlay.onclick = () => {
    // Start the video

    videoElement.play();

    // Update the UI

    container.setAttribute("is-playing", "true");
    videoElement.setAttribute("controls", "true");

    // Bind keyboard shortcuts after we play, controls dont exist yet

    window.addEventListener("keydown", (e) => {
      // [f] Toggle fullscreen

      // this basically means when I press "f" will either fullscreen or exit fullscreen no matter the condition it's in.
      if (e.key.toLowerCase() == "f") {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          videoElement.requestFullscreen();
        }
      }

      // [m] Toggle mute

      // pretty simple command, this just mutes the audio whenever "m" is pressed
      if (e.key.toLowerCase() == "m") {
        videoElement.muted = !videoElement.muted;
      }
    });
  };

});

function updateProgressBar() {
  videoTime.textContent = myVideo.currentTime.toFixed(2);
  const value = (myVideo.currentTime / myVideo.duration) * 100;
  progressBar.style.width = value + "%";
}
