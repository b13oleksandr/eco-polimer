document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('[data-phone-mask]')

  const maskOptions = {
    mask: '+{380} 00 000 00 00',
    lazy: false,
  };

  inputs.forEach((input) => {

    IMask(input, maskOptions);
  })
})
