const AGE = document.getElementById('age-input')
const DAY = document.getElementById('day-of-week')
const MSG = document.createElement('p')
document.body.appendChild(MSG)

function calculateDiscount () {
  if (DAY.value[0] !== 'S' && AGE.value < 18) {
    MSG.textContent = 'Time for school!'
  } else if (DAY.value[0] !== 'S' && AGE.value >= 18) {
    MSG.textContent = 'Time to go to work!'
  } else {
    MSG.textContent = 'Time to relax for the weekend!'
  }
}

// Just to get rid of not used function error
const FALSE = false
if (FALSE) {
calculateDiscount()
}
