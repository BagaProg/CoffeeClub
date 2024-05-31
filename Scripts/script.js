'use strict'
window.addEventListener('resize', function() {
    var videoContainer = document.querySelector('.main__video');
    var video = document.getElementById('video');
    var aspectRatio = 960 / 540; // Соотношение сторон 960:506
    
    if (window.innerWidth < window.innerHeight) {
        aspectRatio = 540 / 960; // Если портретная ориентация
    }

    videoContainer.style.paddingBottom = (0 / aspectRatio) + '%';
});