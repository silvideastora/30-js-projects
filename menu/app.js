// DATA
const menu = [
  {
    id: 1,
    title: "Hotcakes Maple",
    category: "desayuno",
    price: 95.99,
    img:"img/menu-item.jpeg",
    description: `Esponjosos y suaves hotcakes de vainilla, aderezados con miel, mantequilla y frutas`
  },
  {
    id: 2,
    title: "Hamburguesa Especial Queso y papas",
    category: "comida",
    price: 200.99,
    img:"img/item-2.jpeg",
    description: `Doble y jugosa carne especial Angus con papas francesas`
  },
  {
    id: 3,
    title: "Helado con galletas",
    category: "shakes",
    price: 53.99,
    img:"img/item-3.jpeg",
    description: `Batido de vainilla con galletas de chia y limon`
  },
  {
    id: 4,
    title: "Huevitos Gallo",
    category: "desayuno",
    price: 45.99,
    img:"img/item-4.jpeg",
    description: `Huevos estrellados con frijoles de la olla y pan integral`
  },
  {
    id: 5,
    title: "Hamburguesa de pechuga crujiente al limon",
    category: "comida",
    price: 180.99,
    img:"img/item-5.jpeg",
    description: `Pechuga de pollo crujiente con aderezo mil islas`
  },
  {
    id: 6,
    title: "Malteada de Cockies & Cream",
    category: "shakes",
    price: 60.99,
    img:"img/item-6.jpeg",
    description: `Refrescante malteada de helado con galletas de chocolate`
  },
  {
    id: 7,
    title: "Hamburguesa Light",
    category: "comida",
    price: 95.99,
    img:"img/item-7.jpeg",
    description: `Hamburguesa sin pan, con mucha proteina, ideal para dieta`
  },
  {
    id: 8,
    title: "Hamburguesa Sencilla",
    category: "comida",
    price: 55.99,
    img:"img/item-8.jpeg",
    description: `Carne, queso, acompañados de papitas francesas`
  },
  {
    id: 9,
    title: "Smoothie para compartir",
    category: "shakes",
    price: 75.99,
    img:"img/item-9.jpeg",
    description: `Maravilloso smoothie de menta y frambuesa para enamorados`
  },
  {
    id: 10,
    title: "Rib eye Menier",
    category: "comida",
    price: 395.99,
    img:"img/item-10.jpeg",
    description: `Suave corte de rib eye con reduccion de salsa menier y verduras`
  },

]

const sectionCenter = document.querySelector(".section-center")
const filterBtns = document.querySelectorAll(".filters")

window.addEventListener("DOMContentLoaded", function(){
  displayMenuItems(menu)
})

function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(item => {
    return `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4 text-center">
        <img src=${item.img} class="img-fluid rounded mx-auto d-block photo" alt=${item.title}>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${item.title} <small class="text-body-secondary text-success price">$${item.price}</small></h5>
          <p class="card-info">${item.description}</p>
        </div>
      </div>
    </div>
  </div>`
  })
  displayMenu = displayMenu.join("")
  sectionCenter.innerHTML = displayMenu
}

filterBtns.forEach((btn) => {
  btn.addEventListener("click", function(e){

    const category = e.currentTarget.dataset.id
    const menuCategory = menu.filter((menuItem) => {

      if(menuItem.category === category){
        return menuItem
      }
      
    })
    if(category === "todo"){
      return displayMenuItems(menu)
    } else {
      displayMenuItems(menuCategory)
    }
  })

})