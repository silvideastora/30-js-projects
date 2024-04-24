//Reviews data

const reviews = [
  {
    id:1,
    name: "Selena Gomez",
    job: "Web Developer",
    img:"https://picsum.photos/100/100",
    text: "I'm baby meggins health, bicycle rights"
  },
  {
    id:2,
    name: "Aracely Peña",
    job: "UX/UI Designer",
    img:"https://picsum.photos/100/100",
    text: "I'm baby meggins health, bicycle rights"
  },
  {
    id:3,
    name: "King Lee",
    job: "Tech Lead Developer",
    img:"https://picsum.photos/200/300",
    text: "I'm baby meggins health, bicycle rights"
  },
  {
    id:4,
    name: "Rinita Real",
    job: "A cute baby cat",
    img:"https://picsum.photos/200/300",
    text: "I'm baby meggins health, bicycle rights"
  }

]

//Seleccionar los elementos
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

//Inicializando primera card

let currentCard = 0

// Cargando en el DOM la card inicial

window.addEventListener("DOMContentLoaded", function() {
  showCardPerson()
})

// Muestra la card de persona
function showCardPerson(){
  const card = reviews[currentCard]
  img.src = card.img
  author.textContent = card.name
  job.textContent = card.job
  info.textContent = card.text
}

// Muestra la siguiente persona

nextBtn.addEventListener("click", function(){
  currentCard++
  if(currentCard > reviews.length -1){
    currentCard = 0
  }
  showCardPerson()
})

// Muestra la persona previa
prevBtn.addEventListener("click", function(){
  currentCard--
  if(currentCard < 0){
    currentCard = reviews.length -1
  }
  showCardPerson()
})

randomBtn.addEventListener("click", function(){
  currentCard = getRandomNumber()
  showCardPerson()
})

function getRandomNumber(){
  return Math.floor(Math.random() * reviews.length)
}


