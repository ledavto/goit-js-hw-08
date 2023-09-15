import Player from '@vimeo/player';

//var throttle = require('lodash.throttle');

import throttle from 'lodash';

//console.log(throttle);

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const timeVideo = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(timeVideo)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

// var nowTime = throttle(() => {
//   console.log(456);
// }, 1000);

function nowTime() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      //seconds = the current playback position
      console.log(seconds);
      localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch(function (error) {
      // an error occurred
    });

  // console.log(nowTime);
}

//player.on('timeupdate', throttle(nowTime, 1000));
player.on('timeupdate', nowTime);

// player.on(
//   'play',
//   throttle(() => {
//     console.log(456);
//   }, 1000)
// );
