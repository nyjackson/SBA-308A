//import * as playerUtil from './playerUtil.js'

export const BASE_API_URL = "https://deckofcardsapi.com/api/deck";
export let deckId;
export let drawPileId;
export const blackjackActions = ["Hit","Stay","Surrender"];
export const caboActions = ["Draw From Pile","Draw From Deck","Swap Card","Take Action","Cabo"];

export async function getNewDeck() {
  try {
    // &jokers_enabled=true for jokers in the deck 
    const promiseDeck = await fetch(
      BASE_API_URL + "/new/shuffle/?deck_count=1"
    );
    const deckInfo = await promiseDeck.json();
    deckId = deckInfo.deck_id;
    return deckInfo || false;
  } catch (e) {
    console.log("Couldn't get a new deck.");
    console.log(e);
  }
}

export async function drawCard(count) {
  try {
    const promiseCard = await fetch(
      BASE_API_URL + deckId + "/draw/?count=" + count
    );
    const hand = await promiseCard.json();
    console.log(hand);
  } catch (e) {
    console.log("Unable to draw a card.");
    console.log(e);
  }
}

// Add to Pile
// https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/add/?cards=AS,2S



//Return cards to the deck
// https://deckofcardsapi.com/api/deck/<<deck_id>>/return/

export async function reset(){
  await fetch(BASE_API_URL+deckId+"/return/")
}