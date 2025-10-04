const body = document.querySelector('body')
body.style.fontFamily = 'Sora'

const main = document.createElement('main')

body.appendChild(main)

// tarjeta
const card = document.createElement('div')
card.style.width = '336px'

// imagen
const img = document.createElement('img')
img.src = 'https://images.pexels.com/photos/33745085/pexels-photo-33745085.jpeg'
img.style.width = '336px'
img.style.height = '152px'
img.style.padding = '16px'
card.appendChild(img)

// tag
const tag = document.createElement('div')
tag.style.backgroundColor = '#F2EAFD'
tag.style.color = '#7C19EE'
tag.style.padding = '6px 16px'
tag.innerText = 'Design'
card.appendChild(tag)

// titulo pequeño
const h3 = document.createElement('h3')
h3.style.color = '#394150'
h3.innerText = 'Embracing Minimalism'
card.appendChild(h3)

// testo
const texto = document.createElement('p')
texto.style.color= '#394150'
texto.style.fontWeight = '200'
texto.style.marginTop = '6px'
texto.innerText = 'From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.'
card.appendChild(texto)

// author
const author = document.createElement('p')
author.style.color = '#394150'
author.style.fontWeight = '200'
author.textContent = 'Annie Spratt'
author.style.margin = '20px 0'
card.appendChild(author)

main.appendChild(card)
