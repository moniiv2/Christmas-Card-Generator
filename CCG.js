// function display() {
//   document.querySelector('.phase1').classList.remove('phase1')
//

import { cardDesigns } from "./card-designs.js"

document.querySelector('.js-phase1').classList.remove('phase1')
document.querySelector('.phase1-btn').addEventListener('click', () => {
  document.querySelector('.js-phase1').classList.add('phase1')
  document.querySelector('.js-phase2').classList.remove('phase1')
})


let ownersName
let receiversName
let message

document.querySelector('.phase2-btn').addEventListener('click', () => {
  ownersName = document.querySelector('.js-input1').value
  receiversName = document.querySelector('.js-input2').value
  message = document.querySelector('.js-input3').value
  console.log(ownersName)
  console.log(receiversName)
  if(ownersName == '' || receiversName == '') {
    alert("you have to add your name and receiver's name to proceed")
  }
  if(message == '') {
    alert("please compose your message")
  }
  if (ownersName && receiversName && message !== '') {
  document.querySelector('.js-phase2').classList.add('phase1')
  document.querySelector('.js-phase3').classList.remove('phase1')
  }
})

document.querySelector('.phase-3a-btn').addEventListener('click', () => {
  displayFlipCard()
  document.querySelector('.js-phase3').classList.add('phase1')
  document.querySelector('.js-phase4').classList.remove('phase1')
})
document.querySelector('.phase-3b-btn').addEventListener('click', () => {

})

let randomImage = ''
  let randomNumber = Math.round(Math.random())
  if (randomNumber >= 0 && randomNumber < 1/10 ) {
    randomImage = cardDesigns[0]
  } else
  if (randomNumber >= 1/10 && randomNumber < 2/10 ) {
    randomImage = cardDesigns[1]
  } else
  if (randomNumber >= 2/10 && randomNumber < 3/10 ) {
    randomImage = cardDesigns[2]
  } else
  if (randomNumber >= 3/10 && randomNumber < 4/10 ) {
    randomImage = cardDesigns[3]
  } else
  if (randomNumber >= 4/10 && randomNumber < 5/10 ) {
    randomImage = cardDesigns[4]
  } else
  if (randomNumber >= 5/10 && randomNumber < 6/10 ) {
    randomImage = cardDesigns[5]
  } else randomImage = 'CCG images/christmas elk.jpeg'


let flipCardDisplay = ''
let horizontalCardDisplay = ''

function displayFlipCard() {
  flipCardDisplay += `
  <style>
        .card-container {
  box-shadow: 0 9px 11px 0 rgba(0, 0, 0, 0.2);
  transition: 0.8s;
  background-color: transparent;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
}

.card-container:hover .card-container-inner{
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transform: rotateY(180deg)
}

.card-container, .card-image{
  width: 300px;
  height: 300px;
  border-radius: 2rem;
}

.card-container-inner{
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  text-align: center;
  transition: transform 1.6s;
  transform-style: preserve-3d;
}

.back-card {
  padding: 2px 16px;
  transform: rotateY(180deg);
}
  
#back-card-p {
  margin-left: 1.45rem;
}

.front-card {
  background-color: #bbb;
  color: black;
}


.front-card, .back-card{
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
    /* Safari */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
      </style>
      <div class="card-container">
        <div class="card-container-inner">
          <div class="front-card"><img src="${randomImage}" alt="HO! HO! HO!" class="card-image"></div>
          <div class="back-card">
            <h4><b>Merry Christmas, ${receiversName}!</b></h4>
            <p>${message}</p>
            <p style="margin-bottom: 8px;">Love, ${ownersName}</p>
          </div>
        </div>
    </div>
  `
}

document.querySelector('.phase4-btn').addEventListener('click', () => {
  setTimeout(() => {
    document.querySelector('.flip-card').innerHTML = flipCardDisplay
    
  }, 4000)
  document.querySelector('.opening').innerHTML = "loading..."
})