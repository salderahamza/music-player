const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Music
const song = [
  {
    name: "music-1",
    displayName: "Raggae Fusion",
    artist: "Jacinto Design",
  },
  {
    name: "music-2",
    displayName: "Seven Nation Army",
    artist: "Jacinto Design",
  },
  {
    name: "music-3",
    displayName: "Goodnight, Disco Queen",
    artist: "Jacinto Design",
  },
  {
    name: "metric-1",
    displayName: "Front Row",
    artist: "Jacinto Design",
  },
];
// Check if playing
let isPlaying = false;

function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

function prevSong() {
  if (songIndex != 0) {
    songIndex--;
    loadSong(song[songIndex]);
    playSong();
  } else {
    songIndex = 3;
    loadSong(song[songIndex]);
    playSong();
  }
}

function nextSong() {
  if (songIndex != 3) {
    songIndex++;
    loadSong(song[songIndex]);
    playSong();
  } else {
    songIndex = 0;
    loadSong(song[songIndex]);
    playSong();
  }
}

// Play or Pause
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

// Add songs to DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// Current Song
let songIndex = 0;

// On Load - Select First Song
loadSong(song[songIndex]);

//Event Listeners
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
