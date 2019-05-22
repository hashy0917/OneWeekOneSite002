import Anime from 'animejs';
// import React from 'react';

function Animation(){
    Anime({
        targets: 'div',
        translateX: 250,
        rotate: '1turn',
        backgroundColor: '#FFF',
        duration: 800
    });
}

  export default Animation;
