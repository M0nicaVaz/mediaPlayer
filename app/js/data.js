let listBtn = document.querySelector('#listBtn'),
  listContainer = document.querySelector('.list-container'),
  playerContainer = document.querySelector('.player-container'),
  playBtn = document.querySelector('#playBtn'),
  rewindBtn = document.querySelector('#rewindBtn'),
  fowardBtn = document.querySelector('#fowardBtn'),
  stopBtn = document.querySelector('#stopBtn'),
  prevBtn = document.querySelector('#prevBtn'),
  nextBtn = document.querySelector('#nextBtn'),
  albumPic = document.querySelector('#albumPic'),
  musicQueue = document.querySelector('#music-list'),
  songInfo = document.querySelector('#info'),
  song = document.querySelector('#song'),
  nextSongP = document.querySelector('#nextSongI'),
  nextSongDiv = document.querySelector('#nextSongDiv'),
  progress = document.querySelector('#progress'),
  progressBar = document.querySelector('#progressBar'),
  darkMode = document.querySelector('#light-mode'),
  odd = 0,
  index = 0,
  startY = 0;

const songList = [
  {
    title: 'the weeknd - less than zero',
    src: 'assets/audios/The_Weeknd_Less_Than_Zero.mp3',
    album: 'assets/images/dawn_fm.jpg',
  },
  {
    title: 'frank ocean - channel',
    src: 'assets/audios/Frank_Ocean_Chanel.mp3',
    album: 'assets/images/channel.jpg',
  },
  {
    title: 'the xx - say something loving',
    src: 'assets/audios/The_XX_Say_Something_Loving.mp3',
    album: 'assets/images/i_see_you.jpg',
  },
  {
    title: 'the neighbourhood - nervous',
    src: 'assets/audios/The_Neighbourhood_Nervous.mp3',
    album: 'assets/images/the_neighbourhood.jpg',
  },
  {
    title: 'twenty one pilots - pet cheetah',
    src: 'assets/audios/twenty_one_pilots_Pet Cheetah.mp3',
    album: 'assets/images/trench.jpg',
  },
];
