document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.js-video-section')
  const content = document.querySelector('.js-content-video')
  const playButton = document.querySelector('.js-play-video-btn')
  const videoWrap = document.querySelector('.js-video-wrap')
  const video = document.querySelector('.js-video')

  playButton.addEventListener('click', () => {
    content.style.display = 'none'
    videoWrap.style.display = 'flex'
    section.setAttribute('data-autoplay', 'true')
    video.play()
  })

  const options = {
    root: null,
    rootMargin: '-50% 0% -50% 0%',
    threshold: 0,
  };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (section.dataset.autoplay === undefined && entry.isIntersecting) {
        playButton.click()
      } else {
        video.pause()
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  if (section) {
    observer.observe(section);
  }
})
