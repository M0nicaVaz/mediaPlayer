let listBtn = document.querySelector('#listBtn');
let listContainer = document.querySelector('.list-container');
let playerContainer = document.querySelector('.player-container');
let playBtn = document.querySelector('#playBtn');
let rewindBtn = document.querySelector('#rewindBtn');
let fowardBtn = document.querySelector('#fowardBtn');
let stopBtn = document.querySelector('#stopBtn');
let prevBtn = document.querySelector('#prevBtn');
let nextBtn = document.querySelector('#nextBtn');
let albumPic = document.querySelector('#albumPic');
let song = document.querySelector('#song');
let odd = 0;

let songList = [
  {
    artist: 'the weeknd',
    title: 'less than zero',
    src: 'assets/audios/The_Weeknd_Less_Than_Zero.mp3',
    album: 'assets/images/dawn_fm.jpg',
  },
];

song.src = songList[0].src;
albumPic.src = songList[0].album;

listBtn.addEventListener('click', () => {
  let listBtn = document.querySelector('#listBtn');
  odd++;

  if (odd % 2) {
    listBtn.innerHTML =
      ' <i id="listBtn" class="material-icons"> playlist_add</i>';
    albumPic.style.transform = 'scale(1.2)';
  } else {
    listBtn.innerHTML =
      '<i id="listBtn" class="material-icons"> playlist_remove</i>';
    albumPic.style.transform = 'scale(1)';
  }

  listContainer.classList.toggle('display-none');
  playerContainer.classList.toggle('big-player');
});

playBtn.addEventListener('click', () => {
  albumPic.src = songList[0].album;
  if (song.paused) {
    song.play();
    playBtn.innerHTML =
      "<i class='material-icons pause'>pause_circle_filled</i>";
  } else {
    song.pause();
    playBtn.innerHTML =
      "<i id='play' class='material-icons pause'>play_circle</i>";
  }
});

stopBtn.addEventListener('click', () => {
  song.pause();
  song.currentTime = 0;
  playBtn.innerHTML =
    "<i id='play' class='material-icons pause'>play_circle</i>";
});
