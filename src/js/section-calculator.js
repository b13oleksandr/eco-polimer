document.addEventListener('DOMContentLoaded', () => {
  const ranges = document.querySelectorAll('.js-calculator-range')
  const fields = document.querySelectorAll('.js-calculator-text-field')
  const calculatorPotential = document.querySelector('.js-calculator-potential')
  const calculatorProfit = document.querySelector('.js-calculator-profit')
  const fieldsValues = {}

  const calculatePotential = (population, numberAreas, numberParks, lengthWaterfront, numberCemeteries, numberHospitals) => {
    return (+population / 1000) + (+numberAreas * 20) + (+numberParks * 3000) + (+lengthWaterfront * 1000) + (+numberCemeteries * 10000) + (+numberHospitals * 2500)
  }

  const calculateProfit = (potential) => {
    return potential * 20
  }

  const calculate = () => {
    fields.forEach(f => {
      fieldsValues[f.id] = +f.value || 0
    })

    const potential = calculatePotential(
      fieldsValues.population,
      fieldsValues['number-areas'],
      fieldsValues['length-waterfront'],
      fieldsValues['number-cemeteries'],
      fieldsValues['number-hospitals'],
      fieldsValues['number-parks']
    )

    const profit = calculateProfit(potential)

    calculatorPotential.textContent = potential
    calculatorProfit.textContent = new Intl.NumberFormat('ru').format(profit) + ' ₴'
  }

  calculate()

  ranges.forEach(r => {
    const {dataset: {field}} = r

    const input = document.querySelector(`#${field}`)

    if (!input) return

    r.addEventListener('input', ({ target: { value } }) => {
      input.value = value
    })

    r.addEventListener('change', calculate)
  })
})
