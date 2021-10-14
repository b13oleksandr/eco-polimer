document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.js-pp-carousel', {
    loop: true,
    autoplay: true,
  });

  const mainCarouselButtonPrev = document.querySelector('.js-pp-carousel-prev')
  const mainCarouselButtonNext = document.querySelector('.js-pp-carousel-next')

  if (!mainCarouselButtonPrev || !mainCarouselButtonNext) return


  mainCarouselButtonPrev.addEventListener('click', () => {
    swiper.slidePrev()
  })

  mainCarouselButtonNext.addEventListener('click', () => {
    swiper.slideNext()
  })
})
