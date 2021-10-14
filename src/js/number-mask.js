document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('[data-number-mask]')

  const maskOptions = {
    mask: /^\d+$/,
    lazy: false,
  };

  inputs.forEach((input) => {
    IMask(input, maskOptions);
  })
})
