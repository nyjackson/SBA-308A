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

export async function loadSpecificCards(cardsArr, query = ""){
    const trimmed = query.trim()
    //const selectedCards
    if(trimmed !== ""){
        
    }
    else{
        for(let i =0; i < cardsArr.length;i++){
            const card = cardsArr[i]
            createTarotCard(card)
        }
    }
    
}

