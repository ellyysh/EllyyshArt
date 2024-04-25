
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
