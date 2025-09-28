// All logic for index elements 
import * as deckAPI from "./cardAPI.js"
const availGames = ["BlackJack", "Cabo"]
const boardSides = document.getElementsByClassName("board-side")

export function craftCard(card = null){  // card is an object with code, image, images, value, suit
    const frag = document.createDocumentFragment()
    const cardBackImg = "https://deckofcardsapi.com/static/img/back.png"
    const cardFrontImg = card.image
    const cardBackDiv = document.createElement("div")
    const cardFrontDiv = document.createElement("div")
    const frontImg = document.createElement("img")
    const backImg = document.createElement("img")
    
    frontImg.src = cardFrontImg
    backImg.src = cardBackImg

    cardBackDiv.appendChild(backImg)
    cardFrontDiv.appendChild(frontImg)
// if statement here to determine whether to show back or front of card then add to frag
frag.appendChild(cardFrontDiv)
    return frag
}

const cardCrafted = craftCard({
            "code": "6H", 
            "image": "https://deckofcardsapi.com/static/img/6H.png", 
            "images": {
                          "svg": "https://deckofcardsapi.com/static/img/6H.svg", 
                          "png": "https://deckofcardsapi.com/static/img/6H.png"
                      }, 
            "value": "6", 
            "suit": "HEARTS"
        })
        for(let i = 0; i < boardSides.length; i++){
            console.log(boardSides[i])
            boardSides[i].appendChild(cardCrafted)
            boardSides[i].appendChild(cardCrafted)
        }