const createNewPokémonCard = (title, imageUrl, text) => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')

    const cardTitle = document.createElement('h3')
    cardTitle.classList.add('card__title')
    cardTitle.innerText = title
    newCard.appendChild(cardTitle)
    
    const cardImage = document.createElement('img')
    cardImage.classList.add('card__img')
    cardImage.src = imageUrl
    cardImage.alt = ''
    newCard.appendChild(cardImage)

    const cardDescription = document.createElement('p')
    cardDescription.classList.add('card__text')
    cardDescription.innerText = text
    newCard.appendChild(cardDescription)

    return newCard
}

const resetForm = () => {
    document.querySelector('#pokémon-title').value = ''
    document.querySelector('#pokémon-img-link').value = ''
    document.querySelector('#pokémon-text').value = ''
}

const handleSubmit = (event) =>{
    event.preventDefault()
    const formTitle = document.querySelector('#pokémon-title').value
    const formImageUrl = document.querySelector('#pokémon-img-link').value
    const formText = document.querySelector('#pokémon-text').value
    const newPokémonCard = createNewPokémonCard(formTitle, formImageUrl, formText)
    document.querySelector('#cards').appendChild(newPokémonCard)
    resetForm()
}