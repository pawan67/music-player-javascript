const audio = document.getElementById("audio");
const playB = document.getElementById("playB");
const pauseB = document.getElementById("pauseB");
const progress = document.getElementById("progress");
const timestamp = document.getElementById('timestamp');
const playpause = document.querySelector(".playbtn");

function toggleAudioStatus() {
      
  if (audio.paused) {
    audio.play();
    playpause.innerHTML = "<img src='/img/pause.png' id='pauseB' ></img>";
    console.log(playpause)
  } else {
    audio.pause();
    playpause.innerHTML = "<img src='/img/play-button-arrowhead.png' id='playB' >"
      
    
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
  
  
  
  
  
  // eventlisteners
  audio.addEventListener("timeupdate", updateProgress);
  playpause.addEventListener("click", toggleAudioStatus);