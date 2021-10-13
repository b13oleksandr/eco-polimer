document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.js-content-video')
  const playButton = document.querySelector('.js-play-video-btn')
  const videoWrap = document.querySelector('.js-video-wrap')
  const video = document.querySelector('.js-video')

  playButton.addEventListener('click', () => {
    content.style.display = 'none'
    videoWrap.style.display = 'flex'
    video.play()
  })
})
