export class Popup {
  selector
  $popup
  $closeBtn

  #activeClass = 'active'
  #closeSelector = '[data-close]'

  constructor(selector) {
    this.selector = selector

    this.#init()
  }

  #init() {
    this.$popup = document.querySelector(this.selector)

    if (!this.$popup) {
      return
    }

    this.$closeBtn = this.$popup.querySelector(this.#closeSelector)
    this.$closeBtn.addEventListener('click', this.close.bind(this))
  }

  show() {
    this.$popup.classList.add(this.#activeClass)
  }

  close() {
    this.$popup.classList.remove(this.#activeClass)
    this.destroy()
  }

  destroy() {
    this.$closeBtn.removeEventListener('click', this.close)
  }
}
