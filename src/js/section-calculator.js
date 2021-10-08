document.addEventListener('DOMContentLoaded', () => {
  const ranges = document.querySelectorAll('.js-calculator-range')
  const fields = document.querySelectorAll('.js-calculator-text-field')
  const calculatorPotential = document.querySelector('.js-calculator-potential')
  const calculatorProfit = document.querySelector('.js-calculator-profit')
  const fieldsValues = {}

  const calculatePotential = (lengthWaterfront, numberAreas, numberCemeteries, numberHospitals, numberParks, population) => {
    // TODO
    return lengthWaterfront + numberAreas + numberCemeteries + numberHospitals + numberParks + population
  }

  const calculateProfit = (lengthWaterfront, numberAreas, numberCemeteries, numberHospitals, numberParks, population) => {
    // TODO
    return lengthWaterfront + numberAreas + numberCemeteries + numberHospitals + numberParks + population
  }

  const calculate = () => {
    fields.forEach(f => {
      fieldsValues[f.id] = +f.value || 0
    })

    const potential = calculatePotential(
      fieldsValues['length-waterfront'],
      fieldsValues['number-areas'],
      fieldsValues['number-cemeteries'],
      fieldsValues['number-hospitals'],
      fieldsValues['number-parks'],
      fieldsValues.population
    )

    const profit = calculatePotential(
      fieldsValues['length-waterfront'],
      fieldsValues['number-areas'],
      fieldsValues['number-cemeteries'],
      fieldsValues['number-hospitals'],
      fieldsValues['number-parks'],
      fieldsValues.population
    )

    calculatorPotential.textContent = potential
    calculatorProfit.textContent = profit + ' ₴'
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
