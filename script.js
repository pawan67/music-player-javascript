const audio = document.getElementById("audio");
const playB = document.getElementById("playB");
const pauseB = document.getElementById("pauseB");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");
const playpause = document.querySelector(".playbtn");
const plBtn = document.getElementById("pl-btn");
const closeBtn = document.querySelector("i");
const arrDown = document.querySelector(".bx-chevron-down");
const playlistBtn = document
  .querySelector(".bxs-playlist")
  .addEventListener("click", showHidePlaylist);
const playlist = document.querySelector(".playlist");

function toggleAudioStatus() {
  if (audio.paused) {
    audio.play();
    playpause.innerHTML = "<img src='/img/pause.png' id='pauseB' ></img>";
    console.log(playpause);
  } else {
    audio.pause();
    playpause.innerHTML =
      "<img src='/img/play-button-arrowhead.png' id='playB' >";
  }
}
function updateProgress() {
  progress.value = (audio.currentTime / audio.duration) * 100;
  //get minutes
  let mins = Math.floor(audio.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }
  //get seconds
  let secs = Math.floor(audio.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
  console.log(secs);
}

//playlist

function showHidePlaylist() {
  playlist.style.bottom = "0px";
  arrDown.classList.add("bgDown");
  // plBtn.classList.remove("bxs-playlist");
  // plBtn.classList.add("bx-x");
}
// hide playlist
function hidePlaylist() {
  playlist.style.bottom = "-370px";
  console.log("you clicked me");
  arrDown.classList.remove("bgDown");
}
//set audio progress 
function setAudioProgress() {
  audio.currentTime = (+progress.value * audio.duration) / 100;
}
// eventlisteners
audio.addEventListener("timeupdate", updateProgress);
playpause.addEventListener("click", toggleAudioStatus);
closeBtn.addEventListener("click", hidePlaylist);
playlist.addEventListener("swiped-up", showHidePlaylist);
playlist.addEventListener("swiped-down", hidePlaylist);
progress.addEventListener("change", setAudioProgress);
