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
let musicQueue = document.querySelector('#music-list');
let songInfo = document.querySelector('#info');
let song = document.querySelector('#song');
let nextSongP = document.querySelector('#nextSongI');
let progress = document.querySelector('#progress');
let progressBar = document.querySelector('#progressBar');
let odd = 0;
let index = 0;

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
