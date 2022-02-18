window.addEventListener('load', () => {
  musicQueue.innerHTML =
    '<li data-src="assets/audios/The_Weeknd_Less_Than_Zero.mp3">' +
    songList[0].artist +
    ' - ' +
    songList[0].title +
    '</li>' +
    '<li data-src="assets/audios/Frank_Ocean_Chanel.mp3">' +
    songList[1].artist +
    ' - ' +
    songList[1].title +
    '</li>' +
    '<li data-src="assets/audios/The_XX_Say_Something_Loving.mp3">' +
    songList[2].artist +
    ' - ' +
    songList[2].title +
    '</li>' +
    '<li data-src="assets/audios/The_Neighbourhood_Nervous.mp3">' +
    songList[3].artist +
    ' - ' +
    songList[3].title +
    '</li>' +
    '<li data-src="assets/audios/twenty_one_pilots_Pet Cheetah.mp3">' +
    songList[4].artist +
    ' - ' +
    songList[4].title +
    '</li>';
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
  let pickedSong = e.target.dataset.src;
  console.log(pickedSong);
  song.src = pickedSong;
  song.play();
  playBtn.innerHTML = "<i class='material-icons pause'>pause_circle_filled</i>";
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
  songInfo.innerHTML = songList[index].artist + ' - ' + songList[index].title;
  albumPic.src = songList[index].album;
}

nextBtn.addEventListener('click', nextSong);
song.addEventListener('ended', nextSong);

function showNextSong() {
  if (playerContainer.classList.contains('big-player')) {
    if (index < 4) {
      nextSongP.innerHTML =
        'próxima música: ' +
        songList[index + 1].artist +
        ' - ' +
        songList[index + 1].title;
    } else {
      nextSongP.innerHTML =
        'próxima música: ' + songList[0].artist + ' - ' + songList[0].title;
    }
  }
}

//  previous button
// progression bar
// list
