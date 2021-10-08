document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.js-main-carousel', {
    loop: true
  });

  const mainCarouselButtonPrev = document.querySelector('.js-main-carousel-prev')
  const mainCarouselButtonNext = document.querySelector('.js-main-carousel-next')

  if (!mainCarouselButtonPrev || !mainCarouselButtonNext) return


  mainCarouselButtonPrev.addEventListener('click', () => {
    swiper.slidePrev()
  })

  mainCarouselButtonNext.addEventListener('click', () => {
    swiper.slideNext()
  })
})
