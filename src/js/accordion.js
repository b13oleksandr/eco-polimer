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
      const {dataset: {collapsed}} = accordion
      if (collapsed !== undefined) {
        accordion.style.height = headerHeight + 'px'
      }

      toggle.addEventListener('click', () => {
        const {dataset: {collapsed}} = accordion
        const headerHeight = toggle.offsetHeight
        const contentHeight = content.offsetHeight

        if (collapsed !== undefined) {
          accordion.style.height = headerHeight + contentHeight + 'px'
        } else {
          accordion.style.height = headerHeight + 'px'
        }

        accordion.toggleAttribute('data-collapsed')
      })
    })
})
