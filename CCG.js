import { cardDesigns } from "./card-designs.js"

document.querySelector('.js-phase1').classList.remove('phase1')
document.querySelector('.phase1-btn').addEventListener('click', () => {
  document.querySelector('.js-phase1').classList.add('phase1')
  document.querySelector('.js-phase2').classList.remove('phase1')
})

const inputs = document.querySelectorAll('input')
inputs.forEach((input, index) => {
  input.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
      const nextInput = inputs[index + 1]
      if (nextInput) {
        nextInput.focus()
      }
    }
  })
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

let chosenCard = ''
document.querySelector('.phase-3a-btn').addEventListener('click', () => {
  document.querySelector('.js-phase3').classList.add('phase1')
  document.querySelector('.js-phase4').classList.remove('phase1')
  chosenCard = 'flip-card'
})
document.querySelector('.phase-3b-btn').addEventListener('click', () => {
  document.querySelector('.js-phase3').classList.add('phase1')
  document.querySelector('.js-phase4').classList.remove('phase1')
  chosenCard = 'horizontal-card'
})

function generateImage() {
let randomImage = ''
  let randomNumber = Math.random()
  if (randomNumber >= 0 && randomNumber < 1/8 ) {
    randomImage = cardDesigns[0]
  } else
  if (randomNumber >= 1/8 && randomNumber < 2/8 ) {
    randomImage = cardDesigns[1]
  } else
  if (randomNumber >= 2/8 && randomNumber < 3/8 ) {
    randomImage = cardDesigns[2]
  } else
  if (randomNumber >= 3/8 && randomNumber < 4/8 ) {
    randomImage = cardDesigns[3]
  } else
  if (randomNumber >= 4/8 && randomNumber < 5/8 ) {
    randomImage = cardDesigns[4]
  } else
  if (randomNumber >= 5/8 && randomNumber < 6/8 ) {
    randomImage = cardDesigns[5]
  } else
  if (randomNumber >= 6/8 && randomNumber < 7/8) {
    randomImage = cardDesigns[6]
  } else
  if (randomNumber >= 7/8 && randomNumber < 8/8) {
    randomImage = cardDesigns[7]
  }
  return randomImage
}

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
  
.flip-card {
  position: absolute;
  top: 22%;
  left: 31%;
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
  background-color: #f1f1f1;
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
  margin-left: 2rem;
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
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
      </style>
      <div class="card-container">
        <div class="card-container-inner">
          <div class="front-card"><img src="${generateImage()}" alt="HO! HO! HO!" class="card-image"></div>
          <div class="back-card">
            <h4 style="margin-left: 2rem;"><b>Merry Christmas, ${receiversName}!</b></h4>
            <p id= "back-card-p">${message}</p>
            <p style="margin-left: 2rem; position: absolute; bottom: 5%">Love, ${ownersName}</p>
          </div>
        </div>
    </div>
  `
  return flipCardDisplay
}

function displayHorizontalCard () {
  horizontalCardDisplay += `
  <div class="horizontal-card">
    <style>
      .horizontal-card {
  border: solid 1px black;
  border-radius: 2rem;
  height: 250px;
  width: 700px;
  background-color: rgb(247, 247, 242);
  position: absolute;
  top: 25%;
  left: 9%;
}
.card-container2 {
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 1.3rem;
  
}
.card-image2 img{
  height: 250px;
  width: 250px;
  border-radius: 2rem 0 0 2rem;
  border-right: 1px solid black;
}
  </style>
    <div class="card-container2">
      <div class="card-image2">
        <img src="${generateImage()}" alt="cute christmas elk">
      </div>
      <div class="card-details2">
        <h4><b>Merry Christmas, ${receiversName}</b></h4>
        <p>${message}</p>
        <p style="margin-bottom: 8px;">Love, ${ownersName}</p>
      </div>
    </div>
    </div>
  `
  return horizontalCardDisplay
}

// async function timeOut () {
//   await setTimeout(() => {
//     document.querySelector('body').classList.remove('overlay')
//     document.querySelector('.js-overlay').classList.remove('overlay-img')
//     document.querySelector('.hidden-image').classList.add('hidden-image')
//   }, 4000)
//   document.querySelector('body').classList.add('overlay')
//   document.querySelector('.js-overlay').classList.add('overlay')
//   document.querySelector('.hidden-image').classList.remove('hidden-image')
// }

let generateButton = document.querySelector('.phase4-btn')
generateButton.addEventListener('click', () => {
  if(chosenCard == 'flip-card') {
    let section = document.querySelector('#section')
    if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    })
    }
    flipCardDisplay = ''
    generateImage()
    displayFlipCard()

    document.querySelector('.js-card-display-section').innerHTML = flipCardDisplay
    generateButton.disabled = false
  } else if (chosenCard == 'horizontal-card') {
    let section = document.querySelector('#section')
    if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    })
    }
    horizontalCardDisplay = ''
    generateImage()
    displayHorizontalCard()

    document.querySelector('.js-card-display-section').innerHTML = horizontalCardDisplay
    generateButton.disabled = false
  }
})

document.querySelector('.refresh-link').addEventListener('click', () => {
  window.location.href = "The-Christmas-Card-Genetator.html"
})