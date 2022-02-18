function changePlayer() {
  song.src = songList[index].src;
  albumPic.src = songList[index].album;
  songInfo.textContent = songList[index].title;
}

window.addEventListener('load', () => {
  for (let i = 0; i < songList.length; i++) {
    musicQueue.innerHTML += '<li>' + songList[i].title + '</li>';
  }
  changePlayer();
});

playBtn.addEventListener('click', () => {
  albumPic.src = songList[index].album;
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

musicQueue.addEventListener('click', (e) => {
  let obj = songList.findIndex((obj) => obj.title === e.target.innerText);
  index = obj;
  song.src = songList[index].src;
  changePlayer();
  song.play();
});

listBtn.addEventListener('click', () => {
  let listBtn = document.querySelector('#listBtn');
  listContainer.classList.toggle('display-none');
  playerContainer.classList.toggle('big-player');
  odd++;

  if (odd % 2) {
    albumPic.style.transform = 'scale(1.2)';
    listBtn.innerHTML =
      ' <i id="listBtn" class="material-icons"> playlist_add</i>';
    nextSongP.style.opacity = '1';
    showNextSong();
  } else {
    listBtn.innerHTML =
      '<i id="listBtn" class="material-icons"> playlist_remove</i>';
    albumPic.style.transform = 'scale(1)';
    nextSongP.style.opacity = '0';
  }
});

stopBtn.addEventListener('click', () => {
  song.pause();
  song.currentTime = 0;
  playBtn.innerHTML =
    "<i id='play' class='material-icons pause'>play_circle</i>";
});

fowardBtn.addEventListener('click', () => {
  song.currentTime += 10;
});

rewindBtn.addEventListener('click', () => {
  song.currentTime -= 10;
});

function nextSong() {
  index++;
  if (index >= songList.length) {
    index = 0;
  }
  song.src = songList[index].src;
  song.play();
  playBtn.innerHTML = "<i class='material-icons pause'>pause_circle_filled</i>";
  showInfo();
  showNextSong();
}

function showInfo() {
  songInfo.innerHTML = songList[index].title;
  albumPic.src = songList[index].album;
}

function showNextSong() {
  if (playerContainer.classList.contains('big-player')) {
    if (index < 4) {
      nextSongP.innerHTML = 'próxima música: ' + songList[index + 1].title;
    } else {
      nextSongP.innerHTML = 'próxima música: ' + songList[0].title;
    }
  }
}

nextBtn.addEventListener('click', nextSong);
song.addEventListener('ended', nextSong);

// previous button
// progression bar
