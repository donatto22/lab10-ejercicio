const main = document.createElement('main')

const section = document.createElement('section')
section.style.width = '900px'

function createCard(imageUrl, title) {
    const card = document.createElement('article')

    const cardDate = document.createElement('p')
    cardDate.textContent = 'November 12, 2024'
    
    const cardImg = document.createElement('img')
    cardImg.src = imageUrl
    
    const cardContent = document.createElement('div')
    
    const cardTitle = document.createElement('h3')
    cardTitle.textContent = title
    
    cardContent.appendChild(cardTitle)
    cardContent.appendChild(cardDate)
    
    card.appendChild(cardImg)
    card.appendChild(cardContent)
    return card
}

const card1 = createCard('', 'titulo1')
const card2 = createCard('', 'titulo2')
const card3 = createCard('', 'titulo3')

section.appendChild(card1)
section.appendChild(card2)
section.appendChild(card3)

main.appendChild(section)

document.body.appendChild(main)


