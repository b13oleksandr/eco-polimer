export class Popup {
  selector
  $popup
  $closeBtns

  #activeClass = 'active'
  #closeSelector = '[data-close]'

  constructor(selector, options = {}) {
    this.selector = selector
    this.options = options
    this.#init(options)
  }

  #init(options = {}) {
    this.$popup = document.querySelector(this.selector)

    if (options.title) {
      this.$title = this.$popup.querySelector('[data-title]')
      this.$title.innerText = options.title
    }

    if (!this.$popup) {
      return
    }

    this.$closeBtns = this.$popup.querySelectorAll(this.#closeSelector)
    this.$closeBtns.forEach((btn) => {
      btn.addEventListener('click', this.close.bind(this))
    })
  }

  show() {
    if (this.options.beforeOpen && typeof this.options.beforeOpen === 'function') {
      this.options.beforeOpen()
    }

    this.$popup.classList.add(this.#activeClass)
  }

  close() {
    this.$popup.classList.remove(this.#activeClass)
  }
}
