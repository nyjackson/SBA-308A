const BASE_API_URL = "https://deckofcardsapi.com/api/deck"
let deckId;

export async function getNewDeck(){
    try{
    const promiseDeck = await fetch(BASE_API_URL+"/new/shuffle/?deck_count=1")
    const deckInfo = await promiseDeck.json()
    deckId = deckInfo.deck_id
    return deckInfo || false
    }
    catch(e){
        console.log("Couldn't get a new deck.")
        console.log(e)
    }
}

getNewDeck()

export async function drawCard(count){
try{
const promiseCard = await fetch(BASE_API_URL+ deckId+"/draw/?count="+count)
const hand = await promiseCard.json()
console.log(hand)
}
catch(e){
    console.log("Unable to draw a card.")
    console.log(e)
}
}