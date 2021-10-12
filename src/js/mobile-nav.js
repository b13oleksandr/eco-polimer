document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.js-hamburger')
  const menu = document.querySelector('.js-mobile-nav')
  const menuInner = document.querySelector('.js-mobile-nav-inner')

  hamburger.addEventListener('change', (e) => {
    // e.preventDefault()
    const collapsed = menu.dataset.collapsed

    if (collapsed !== undefined) {
      console.log('1')
      menu.style.height = menuInner.offsetHeight + 'px'
    } else {
      console.log('2')
      menu.style.height = 0 + 'px'
    }

    console.log('3')
    menu.toggleAttribute('data-collapsed')
  })
})
