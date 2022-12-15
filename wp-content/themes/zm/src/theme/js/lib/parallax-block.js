$(document).ready(function() {
    $('.image-block-parallax').each(function(i, el) {
        const front = el.querySelector('.image-block-parallax__front img');

        new simpleParallax(front, { 
            scale: 1.15
        });
    });
});