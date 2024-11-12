// function display() {
//   document.querySelector('.phase1').classList.remove('phase1')
//

document.querySelector('.js-phase1').classList.remove('phase1')
document.querySelector('.phase1-btn').addEventListener('click', () => {
  document.querySelector('.js-phase1').classList.add('phase1')
  document.querySelector('.js-phase2').classList.remove('phase1')
})

document.querySelector('.phase2-btn').addEventListener('click', () => {
  let ownersName = document.querySelector('.js-input1').value
  console.log(ownersName)
})