const objetImg = {
  0: './public/image-product-1.jpg',
  1: './public/image-product-2.jpg',
  2: './public/image-product-3.jpg',
  3: './public/image-product-4.jpg'
}

function previous() {

  removeActive()

  if (currentImg === 0) {

    THUMBNAILS[THUMBNAILS_2.length - 1].classList.add('active-image')
    THUMBNAILS_2[THUMBNAILS_2.length - 1].classList.add('active-image')

    sectionImg.src = objetImg[THUMBNAILS_2.length - 1]
    IMG.src = objetImg[THUMBNAILS_2.length - 1]

    currentImg = THUMBNAILS_2.length - 1

  } else {

    THUMBNAILS[currentImg - 1].classList.add('active-image')
    THUMBNAILS_2[currentImg - 1].classList.add('active-image')

    sectionImg.src = objetImg[currentImg - 1]
    IMG.src = objetImg[currentImg - 1]

    currentImg = currentImg - 1

  }
}

function next() {

  removeActive()

  if (currentImg === THUMBNAILS_2.length - 1) {

    THUMBNAILS[0].classList.add('active-image')
    THUMBNAILS_2[0].classList.add('active-image')

    sectionImg.src = objetImg[0]
    IMG.src = objetImg[0]

    currentImg = 0

  } else {

    THUMBNAILS[currentImg + 1].classList.add('active-image')
    THUMBNAILS_2[currentImg + 1].classList.add('active-image')

    sectionImg.src = objetImg[currentImg + 1]
    IMG.src = objetImg[currentImg + 1]

    currentImg = currentImg + 1

  }
}

function removeActive() {
  for (let j = 0; j < THUMBNAILS.length; j++) {
    THUMBNAILS[j].classList.remove('active-image')
    THUMBNAILS_2[j].classList.remove('active-image')
  }
}

const THUMBNAILS = document.getElementsByClassName('image-thumbnail')
const THUMBNAILS_2 = document.getElementsByClassName('section-image-thumbnail')
const sectionDiv = document.getElementById('sectionDiv')
const section = document.getElementsByTagName('section')[0]
const CLOSE = document.getElementById('close')
const sectionImg = document.getElementById('sectionImg')
const IMG = document.getElementById('IMG')

const arrowLeft = document.getElementById('arrowLeft')
const arrowRight = document.getElementById('arrowRight')

const plusItem = document.getElementById('plus')
const moinsItem = document.getElementById('moins')
const numberItem = document.getElementById('number')

const addToCart = document.getElementById('addToCart')
const itemInCart = document.getElementById('itemNumber')
const btnCart = document.getElementById('btnCart')
const cart = document.getElementById('cart')
const cartContent = document.getElementById('cartContent')

let currentImg = 0;

const burger = document.getElementById('menuBurger')
const hiddenClose = document.getElementById('hiddenClose')
const hiddenMenu = document.getElementById('hiddenMenu')

for (let i = 0; i < THUMBNAILS.length; i++) {

  THUMBNAILS[i].addEventListener('click', (e) => {

    removeActive()

    THUMBNAILS[i].classList.add('active-image')
    THUMBNAILS_2[i].classList.add('active-image')
    sectionImg.src = objetImg[i]
    IMG.src = objetImg[i]
    sectionDiv.style.display = 'flex';
    sectionDiv.classList.add('blackish');

    currentImg = i;

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        next()
      } else if (e.key === 'ArrowLeft') {
        previous()
      }
    })

  })

  THUMBNAILS_2[i].addEventListener('click', (e) => {
  
    removeActive()
  
    THUMBNAILS[i].classList.add('active-image')
    THUMBNAILS_2[i].classList.add('active-image')
    
    sectionImg.src = objetImg[i]
    IMG.src = objetImg[i]
    sectionDiv.style.display = 'flex';
    sectionDiv.classList.add('blackish');
  
    currentImg = i;
  
  })
}

arrowLeft.addEventListener('click', previous)

arrowRight.addEventListener('click', next)

CLOSE.addEventListener('click', (e) => {
  sectionDiv.style.display = 'none';
  sectionDiv.classList.remove('blackish');
  e.preventDefault()
})



plusItem.addEventListener('click', () => {
  numberItem.value++
})
moinsItem.addEventListener('click', () => {

  if (numberItem.value == 0) {
    numberItem.value = 0
  } else {
    numberItem.value--
  }
})

addToCart.addEventListener('click', () => {
  if (numberItem.value > 0) {
    itemInCart.classList.add('numberOfItemAddedTocart')
    itemInCart.innerText = numberItem.value
    cartContent.innerHTML = `<div class = "inner-cart-div"><img class = "cart-img" src = '${THUMBNAILS[0].src}'/> <div><p>Fall Limited Edition Sneakers</p> <p>\$215 x ${numberItem.value} <b>$${215 * parseInt(numberItem.value)}</b></p></div> <button id='delete' class = "bg-none br-none"><img src ="./public/icon-delete.svg"/></button></div>
                             <button class = "checkout">Checkout</button>`
  }

  const btnDelete = document.getElementById('delete')
  btnDelete.addEventListener('click', () => {
    cartContent.innerHTML = 'The cart is empty !!!'
    numberItem.value = 0
    itemInCart.classList.remove('numberOfItemAddedTocart')
    itemInCart.innerText = ''
  })
})

let toggle = false

btnCart.addEventListener('click', () => {
  if (!toggle) {
    cart.style.transform = 'rotateX(0deg)'
    toggle = true
  }
  else {
    cart.style.transform = 'rotateX(90deg)'
    toggle = false
  }
})

burger.addEventListener('click', ()=>{
  hiddenMenu.style.transform = 'scaleX(1)'
})
hiddenClose.addEventListener('click', ()=>{
  hiddenMenu.style.transform = 'scaleX(0)'
})




