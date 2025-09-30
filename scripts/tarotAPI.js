import {createTarotCard, clearCards} from "./uiHelpers.js"
import { searchQ } from "./index.js"

export const BASE_API_URL = "https://tarotapi.dev/api/v1/cards/"

export async function loadAllCards(){
    // will load all cards
    clearCards()
    try{
    const allCards = await fetch(BASE_API_URL)
    const cardsJson = await allCards.json()
    document.body.style.cursor  = "wait"
    console.log(cardsJson)
    const cardsArr = cardsJson.cards
    loadSpecificCards(cardsArr)
    }
    catch(e){
        console.log(e)
        alert("Couldn't load all cards. Try Again.")
    }
    
}

export async function loadSpecificCards(cardsArr){
     document.body.style.cursor  = "wait"
        for(let i = 0; i < cardsArr.length;i++){
            const card = cardsArr[i]
            console.log(card)
            createTarotCard(card)
        }
}

export async function searchFor(e){
e.preventDefault()
clearCards()
const query = searchQ.value.trim().toLowerCase()
console.log(query)
if(query == ""){
    alert("Please enter a keyword to search for.")
    return
}
const queryCheck = query.replace("judgement", "judgment")

try{
const cardLink = await fetch(BASE_API_URL + "search/?q=" + queryCheck)
const cardJson = await cardLink.json()
console.log(cardJson)
if(cardJson.cards.length < 2){
    createTarotCard(cardJson.cards[0])
}
else{
    loadSpecificCards(cardJson.cards)
}
}
catch(e){
    console.log(e)
    alert("Unable to search. Try another term!")
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