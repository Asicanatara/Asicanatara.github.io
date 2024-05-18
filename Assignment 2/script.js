const videoList = [
  { name: "Ticking Away - Valorant, bbno$ and Grabbitz", link: "TickingAway.mp3" },
  { name: "Die For You - Valorant and Grabbitz", link: "DieForYou.mp4" },
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Getting the elements
  const $ = (s) => document.querySelector(s);
  // writing this previous code allows me to write the rest of the script faster, instead of writing const ____ = document.querySelector("___"), I can just write $
  const container = $(".media-player");
  const videoElement = $("video");
  const largePlay = $(".large-circle-button");
  const videoName = $("#video-name");
  const myVideo = $("#my-video");
  const videoTime = $("#video-time");
  const progressBar = $("#progress-bar-fill");
  console.log(container);

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

function playVideo(no) {
  myVideo.src = videoList[no].link;
  videoName.textContent = videoList[no].name;
  // myVideo.load();
  // myVideo.play();
}


const modal = $("#modal")
const openModal = $(".open-button")
const closeModal = $(".close-button")

openmodel.addEventListener('click', () => {
  modal.showModal();
})

