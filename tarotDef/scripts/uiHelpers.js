import {cardGallery} from './index.js'

export function createTarotCard(card){
// recieves the card object. 
const frag = document.createDocumentFragment()
const cardDiv = document.createElement("div")
cardDiv.classList.add("tarot-card")
console.log(card.name)
const tarotImg = getImage(card.name)
const tarotDesc = getTarotInfo(card)
cardDiv.appendChild(tarotImg)
cardDiv.appendChild(tarotDesc)
frag.appendChild(cardDiv)

uploadCard(frag)
}

export function createTarotGallery(cards){
// recieves an array of card objects 
}

function uploadCard(cardFrag){
// card fragment 
cardGallery.appendChild(cardFrag)
}

export function clearCards(){
    while(cardGallery.firstChild){
        cardGallery.removeChild(cardGallery.firstChild)
    }
}

function getImage(name){
    const img = document.createElement("img")
    const imgName = name.toLowerCase().split(" ").join("")
    img.src = `./images/${imgName}.jpeg`
    img.alt = "Picture of " + name
    return img
}

function getTarotInfo(card){
    const frag = document.createDocumentFragment()
    const h1 = document.createElement("h1")
    const h2 = document.createElement("h2")
    const meaningsP = document.createElement("p")
    const descriptionP = document.createElement("p")
    h1.textContent = "Card Name: " + card.name
    h2.textContent = "Type: "+ card.type
    meaningsP.innerHTML = `<span id = 'meaning'>Upright Meaning:</span> ${card.meaning_up}\n
    <span id = "meaning">Reverse Meaning:</span> ${card.meaning_rev}`
    descriptionP.textContent = card.desc

    frag.appendChild(h1)
    frag.appendChild(h2)
    frag.appendChild(meaningsP)
    frag.appendChild(descriptionP)
    return frag

}