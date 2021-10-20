import {Popup} from "./plugins/popup"

document.addEventListener('DOMContentLoaded', () => {
  const PHONE_REGEX = /^\+380\s(\d{2})\s(\d{3})\s(\d{2})\s(\d{2})/
  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]*$/

  const forms = document.querySelectorAll('.js-form')

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      deleteError(form)

      const formData = new FormData(form)
      const validation = validate(formData)
      const { dataset: { type } } = form

      if (validation.isValid) {
        send(form, formData, type === 'popup' ? onSuccessPopup.bind(form) : onSuccess)
      } else {
        showError(form, validation.message)
      }
    })
  })

  function onSuccess() {
    new Popup('.js-success-popup').show()
  }


  function onSuccessPopup() {
    this.querySelector('.js-form-wrap').style.display = 'none'
    this.querySelector('.js-form-send').style.display = 'none'
    this.querySelector('.js-success').style.display = 'block'
  }


  function validate(formData) {
    let result = {
      isValid: true,
      message: ''
    }

    for (const v of formData.values()) {
      if (!v) {
        result.isValid = false
        result.message = 'Заповніть усі поля'
        return result
      }
    }

    for (const [k, v] of formData.entries()) {
      if (k === 'phone' && !isPhone(v)) {
        result.isValid = false
        result.message = 'Невірний формат номера'
        return result
      }

      if (k === 'email' && !isEmail(v)) {
        result.isValid = false
        result.message = 'Невірний формат електронної пошти'
        return result
      }
    }

    return result
  }

  function send(form, formData, callback) {
    fetch('../email.php', {
      method: 'post',
      body: formData
    }).then((response) => {
      if (!response.ok) {
        showError(form, 'Сталась помилка. Спробуйте ще раз')
        return
      }

      if (callback && typeof callback === 'function') {
        callback()
      }

      return response.text()
    })
  }

  function showError(formEl, message) {
    formEl.insertAdjacentHTML('beforeend', `
      <div class="form-error">${message}</div>
    `)
  }

  function deleteError(formEl) {
    const errorEl = formEl.querySelector('.form-error')

    if (errorEl) {
      errorEl.remove()
    }
  }

  function isPhone(phone) {
    return PHONE_REGEX.test(phone)
  }

  function isEmail(email) {
    return EMAIL_REGEX.test(email)
  }
})
