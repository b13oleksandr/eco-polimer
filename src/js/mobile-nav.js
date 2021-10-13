document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.js-hamburger')
  const menu = document.querySelector('.js-mobile-nav')
  const menuInner = document.querySelector('.js-mobile-nav-inner')

  hamburger.addEventListener('change', (e) => {
    const collapsed = menu.dataset.collapsed

    if (collapsed !== undefined) {
      menu.style.height = menuInner.offsetHeight + 'px'
    } else {
      menu.style.height = 0 + 'px'
    }

    menu.toggleAttribute('data-collapsed')
  })
})
