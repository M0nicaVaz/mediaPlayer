function changePlayer() {
  song.src = songList[index].src;
  albumPic.src = songList[index].album;
  songInfo.textContent = songList[index].title;
}

function nextSong() {
  index++;
  if (index >= songList.length) {
    index = 0;
  }
  song.src = songList[index].src;
  song.play();
  playBtn.innerHTML = `<i class='material-icons pause'>pause_circle_filled</i>`;
  showInfo();
  showNextSong();
}

function showInfo() {
  songInfo.innerHTML = songList[index].title;
  albumPic.src = songList[index].album;
}

function showNextSong() {
  if (playerContainer.classList.contains('grow')) {
    if (index < songList.length) {
      nextSongP.innerHTML = ` a seguir: <br> ${songList[index + 1].title}`;
    } else {
      nextSongP.innerHTML = ` a seguir: <br> ${songList[0].title}`;
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < songList.length; i++) {
    musicQueue.innerHTML += `<li class="playlist-list-item"> ${songList[i].title} </li>`;
  }
  changePlayer();
});

playBtn.addEventListener('click', () => {
  albumPic.src = songList[index].album;
  if (song.paused) {
    song.play();
    playBtn.innerHTML = `<i class='material-icons pause'>pause_circle_filled</i>`;
  } else {
    song.pause();
    playBtn.innerHTML = `<i id='play' class='material-icons pause'>play_circle</i>`;
  }
});

musicQueue.addEventListener('click', (e) => {
  let obj = songList.findIndex((obj) => obj.title === e.target.innerText);
  index = obj;
  song.src = songList[index].src;
  playBtn.innerHTML = `<i class='material-icons pause'>pause_circle_filled</i>`;
  changePlayer();
  song.play();
});

listBtn.addEventListener('click', () => {
  let listBtn = document.querySelector('#listBtn');
  let container = document.querySelector('#mainContainer');

  container.classList.toggle('opened-container');
  listContainer.classList.toggle('display-none');
  playerContainer.classList.toggle('grow');

  odd++;

  if (odd % 2) {
    albumPic.style.transform = 'scale(1.1)';
    listBtn.innerHTML = `<i id="listBtn" class="material-icons"> playlist_add</i>`;
    nextSongP.style.opacity = '1';
    showNextSong();
  } else {
    listBtn.innerHTML = `<i id="listBtn" class="material-icons"> playlist_remove</i>`;
    albumPic.style.transform = 'scale(1)';
    nextSongP.style.opacity = '0';
  }
});

stopBtn.addEventListener('click', () => {
  song.pause();
  song.currentTime = 0;
  playBtn.innerHTML = `<i id='play' class='material-icons pause'>play_circle</i>`;
});

prevBtn.addEventListener('click', () => {
  if (index == 0) {
    index = songList.length - 1;
  }

  index--;
  song.src = songList[index].src;

  song.play();
  playBtn.innerHTML = `<i class='material-icons pause'>pause_circle_filled</i>`;
  showInfo();
  showNextSong();
});

song.addEventListener('timeupdate', (e) => {
  let currentTime = e.target.currentTime;
  let duration = e.target.duration;
  let progressWidth = (currentTime / duration) * 100;
  progress.style.width = `${progressWidth}%`;

  let currentTimeP = document.querySelector('#current');
  let currentMin = Math.floor(song.currentTime / 60);
  let currentSec = Math.floor(song.currentTime % 60);

  if (currentSec < 10) {
    currentSec = `0${currentSec}`;
  }
  currentTimeP.innerText = `${currentMin}:${currentSec}`;
});
song.addEventListener('loadeddata', () => {
  let durationP = document.querySelector('#duration');
  let totalMin = Math.floor(song.duration / 60);
  let totalSec = Math.floor(song.duration % 60);

  if (totalSec < 10) {
    totalSec = `0${totalSec}`;
  }
  durationP.innerText = `${totalMin}:${totalSec}`;
});

progressBar.addEventListener('click', (e) => {
  let val = progressBar.clientWidth;
  let progressClicked = e.offsetX;
  let songDuration = song.duration;
  song.currentTime = (progressClicked / val) * songDuration;
});

nextBtn.addEventListener('click', nextSong);

song.addEventListener('ended', nextSong);
