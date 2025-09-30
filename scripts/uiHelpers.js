import {cardGallery} from './index.js'

export function createTarotCard(card){
const frag = document.createDocumentFragment()
const cardDiv = document.createElement("div")
cardDiv.classList.add("tarot-card")
//console.log(card.name)

if(card.name == "The Last Judgment"){card.name = "Judgement"}

const tarotImg = getImage(card.name)
const tarotDesc = getTarotInfo(card)

cardDiv.appendChild(tarotImg)
cardDiv.appendChild(tarotDesc)
frag.appendChild(cardDiv)

uploadCard(frag)
}

function uploadCard(cardFrag){
cardGallery.appendChild(cardFrag)
document.body.style.cursor = "default"
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
        img.onerror = () => {
        img.src = "https://img.icons8.com/ios/50/no-image.png"
        img.alt = "no-image"
        }
    return img
}
function getTarotInfo(card){
    const frag = document.createDocumentFragment()
    const div = document.createElement("div")
    const h1 = document.createElement("h1")
    const h2 = document.createElement("h2")
    const meaningsP = document.createElement("p")
    const descriptionP = document.createElement("p")

    h1.textContent = "Name: " + card.name
    h2.textContent = "Type: "+ card.type
    meaningsP.innerHTML = `<span id = 'meaning'>Upright Meaning:</span> ${card.meaning_up}<br>
    <span id = "meaning">Reverse Meaning:</span> ${card.meaning_rev}`
    descriptionP.innerHTML = `<span id = "meaning">Description:</span> ${card.desc}`//card.desc

    div.appendChild(h1)
    div.appendChild(h2)
    div.appendChild(meaningsP)
    div.appendChild(descriptionP)
    div.classList.add("tarot-info")

    frag.appendChild(div)
    return frag

}

export function craftAbout(){
 clearCards()
 const frag = document.createDocumentFragment()
 const aboutDiv = document.createElement("div")
 const h1 = document.createElement("h1")
 const p = document.createElement("p")
 const sub = document.createElement("sub")

 h1.textContent = "Welcome to Tarotific!"
 p.textContent = "Tarotific is a site to explore the meanings of tarot cards! Select an option from the bar above or enter a search term to get started."
 sub.innerHTML = "Information from <a href = 'https://tarotapi.dev/'>Tarot API</a> and Images from <a href = 'https://github.com/krates98/tarotcardapi/'>Krates98</a>"

 aboutDiv.appendChild(h1)
 aboutDiv.appendChild(p)
 aboutDiv.appendChild(sub)
 aboutDiv.id = "about"

frag.appendChild(aboutDiv)
uploadCard(frag)
}

