document.addEventListener('DOMContentLoaded', () => {
  if (window.NodeList && !NodeList.prototype.forEach) {
    return
  }

  document.querySelectorAll('.js-accordion')
    .forEach((accordion) => {

      const toggle = accordion.querySelector('[data-toggle]')
      const content = accordion.querySelector('[data-content]')

      if (!toggle || !content) return

      const headerHeight = toggle.offsetHeight
      const contentHeight = content.offsetHeight
      const { dataset: { collapsed } } = accordion
      if (collapsed !== undefined) {
        accordion.style.height = headerHeight + 'px'
      }

      toggle.addEventListener('click', () => {
        accordion.toggleAttribute('data-collapsed')
        const { dataset: { collapsed } } = accordion

        if (collapsed !== undefined) {
          const interval = setInterval(() => {
            if (accordion.offsetHeight > headerHeight) {
              accordion.style.height = accordion.offsetHeight - 3 + 'px'
            } else {
              accordion.style.height = headerHeight + 'px'
              clearInterval(interval)
            }
          }, 1)
        } else {
          const interval = setInterval(() => {
            if (accordion.offsetHeight < headerHeight + contentHeight) {
              accordion.style.height = accordion.offsetHeight + 3 + 'px'
            } else {
              accordion.style.height = headerHeight + contentHeight + 'px'
              clearInterval(interval)
            }
          }, 1)
        }
      })
    })

})
