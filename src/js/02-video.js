// import Player from '@vimeo/player';

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

    // player.on('play', function() {
    //     console.log('played the video!');
    // });

    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });

import Player from '@vimeo/player';

const player = new Player('handstick', {
    id: 192318684,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
})