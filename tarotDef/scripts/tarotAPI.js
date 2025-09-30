export const BASE_API_URL = "https://tarotapi.dev/api/v1/cards/"

export async function loadAllCards(){
    // will load all cards
    e.preventDefault()
    const allCards = await fetch(BASE_API_URL)
    const cardsJson = await allCards.json()
    console.log(cardsJson)
    const cardsArr = cardsJson.cards
}

export async function loadTarotCards(query = ""){
    const trimmed = query.trim()
    //const selectedCards
    if(trimmed !== ""){

    }
    
}

