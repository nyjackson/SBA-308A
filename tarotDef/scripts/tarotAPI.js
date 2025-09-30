import {createTarotCard, clearCards, createTarotGallery} from "./uiHelpers.js"
export const BASE_API_URL = "https://tarotapi.dev/api/v1/cards/"

export async function loadAllCards(){
    // will load all cards
    //e.preventDefault()
    const allCards = await fetch(BASE_API_URL)
    const cardsJson = await allCards.json()
    console.log(cardsJson)
    const cardsArr = cardsJson.cards
    loadSpecificCards(cardsArr)
}

export async function loadSpecificCards(cardsArr){
        for(let i =0; i < cardsArr.length;i++){
            const card = cardsArr[i]
            createTarotCard(card)
        }
}

export async function searchFor(e){
// search for specific logic, change current logic as it searches all uses of the word(s)
e.preventDefault()
clearCards()
const value = e.target.value
console.log(value)
const cardLink = await fetch(BASE_API_URL + "search/?q=" + value)
const cardJson = await cardLink.json()
console.log(cardJson)
if(cardJson.length > 1){
    createTarotCard(cardJson.cards[0])
}
else{
    loadSpecificCards(cardJson.cards)
}
}

export async function randomCard(){
    clearCards()
    try{
    const randCardLink = await fetch(BASE_API_URL +"random?n=1")
    const jsonResp = await randCardLink.json()
    createTarotCard(jsonResp.cards[0])
    }
    catch(e){
        let eMessage = "Unable to get random card. Try Again."
        console.log(e)
        alert(eMessage)
    }

}