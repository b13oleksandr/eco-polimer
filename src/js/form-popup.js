import {Popup} from "./plugins/popup";

const btns = document.querySelectorAll('.js-form-popup-btn')

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const { dataset: { title } } = btn

    const options = {}

    if (title) {
      options.title = title
    }

    const beforeOpen = () => {
      const form = document.querySelector('.js-form-popup')

      form.querySelector('.js-form-wrap').style.display = 'flex'
      form.querySelector('.js-form-send').style.display = 'block'
      form.querySelector('.js-success').style.display = 'none'
    }

    options.beforeOpen = beforeOpen

    new Popup('.js-form-popup', options).show()
  })
})
