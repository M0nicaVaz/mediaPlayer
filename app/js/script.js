song.src = songList[4].src;
albumPic.src = songList[4].album;

musicQueue.innerHTML =
  '<li>' + songList[4].artist + ' - ' + songList[4].title + '</li>';

songInfo.textContent = songList[4].artist + ' - ' + songList[4].title;

musicQueue.addEventListener('click', () => {
  playBtn.innerHTML = "<i class='material-icons pause'>pause_circle_filled</i>";
  song.currentTime = 0;
  song.play();
});

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
  albumPic.src = songList[4].album;
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
