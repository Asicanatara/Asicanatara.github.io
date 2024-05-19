//defining the media player
  const container = document.querySelector(".media-player");

  //defining the video
  const videoElement = document.querySelector("video");

  //defining the circular button
  const largePlay = document.querySelector(".large-circle-button");

  //defining the video
  const myVideo = document.querySelector("#TickingAway");

  //defining the video time
  const videoTime = document.querySelector("#video-time")

  //defining the progress bar
  const progressBar = document.querySelector("#progress-bar-fill");

  console.log(container);

//adding an event listener for the progress bar
  myVideo.addEventListener("timeupdate", updateProgressBar);
 

  // large play is the defined term I used to describe the giant play button on the screen.
  // This signifies that when I click the video on the screen in general, the video plays or pauses
  largePlay.onclick = () => {
    // Start the video

    videoElement.play();


    //if you see this say hi at the start of your feedback <3
    
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


  //updates the Progress bar every millisecond the video plays
  };
  function updateProgressBar() {
    videoTime.textContent = myVideo.currentTime.toFixed(2);
    const value = (myVideo.currentTime / myVideo.duration) * 100;
    progressBar.style.width = value + "%";
  }

