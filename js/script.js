
const openButton = document.getElementById('open-video');
const videoContainer = document.getElementById('video-container');
const video = document.getElementById('video');

openButton.addEventListener('click', () => {
  videoContainer.style.display = 'block';
  video.play();

  video.addEventListener('ended', () => {
    videoContainer.style.display = 'none';
  });
});

const triggerLinks = document.querySelectorAll('.trigger');
const floatingImage = document.getElementById('floating-image-container');

triggerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        floatingImage.style.bottom = '-20px';

        setTimeout(() => {
            floatingImage.style.bottom = '-350px';
        }, 3000);
    });
});

        function changeBackgroundAndPlaySound() {
            var body = document.querySelector('body');
            body.style.backgroundImage = 'url(img/bg2.png)';
            body.style.backgroundSize = 'cover';

            var audio = new Audio('img/whistle.mp3');
            audio.play();

            setTimeout(function() {
                body.style.backgroundImage = 'url(img/stars.png)';
            }, 5000);
        }

      

