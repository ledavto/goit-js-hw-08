import Player from '@vimeo/player';

import throttle from 'lodash/throttle';

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

}

player.on('timeupdate', throttle(nowTime, 1000));
//player.on('timeupdate', nowTime);

