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
const title = document.getElementById("title");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const subTitlep = document.getElementById("sub-title");
const albumArt = document.getElementById("album-art-image");
const randomNum = Math.floor(Math.random() * 6);

const songs = [
  "holdon",
  "lostinfire",
  "often",
  "onethingright",
  "prayforme",
  "stay",
];

const songsTitle = [
  "Hold On",
  "Lost in the Fire",
  "Often",
  "One Thing Right",
  "Pray For Me",
  "Stay",
];
const subTitle = [
  "Justin Bieber",
  "The Weeknd & Gesaffelstein",
  "The Weeknd",
  "Marshmello & Kane Brown",
  "Pray For Me",
  "The Kid LAROI & Justin Bieber",
];
let songIndex = 1;
const shuffleBtn = document
  .getElementById("shuffle-btn")
  .addEventListener("click", () => {
    songIndex ++;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  loadSongTitle(songsTitle[songIndex]);
  loadSubTitle(subTitle[songIndex]);

  toggleAudioStatus();
  });

loadSong(songs[songIndex]);
loadSongTitle(songsTitle[songIndex]);
loadSubTitle(subTitle[songIndex]);

function loadSong(song) {
  // title.innerText = song;
  audio.src = `music/${song}.mp3`;
  albumArt.src = `img/${song}.jpg`;
}
function loadSongTitle(e) {
  title.innerText = e;
  console.log(e);
}
function loadSubTitle(e) {
  subTitlep.innerText = e;
  console.log(e);
}

//prev song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  loadSongTitle(songsTitle[songIndex]);
  loadSubTitle(subTitle[songIndex]);

  toggleAudioStatus();
}
//next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  loadSongTitle(songsTitle[songIndex]);
  loadSubTitle(subTitle[songIndex]);

  toggleAudioStatus();
}

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
  playlist.style.bottom = "-380px";
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
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);
