//import * as playerUtil from './playerUtil.js'

export const BASE_API_URL = "https://deckofcardsapi.com/api/deck";

// Add to Pile
// https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/add/?cards=AS,2S

//Return cards to the deck
// https://deckofcardsapi.com/api/deck/<<deck_id>>/return/
 export async function getNewDeck() {
    try {
      // &jokers_enabled=true for jokers in the deck
      const promiseDeck = await fetch(
        BASE_API_URL + "/new/shuffle/?deck_count=1"
      );
      const deckInfo = await promiseDeck.json();
      console.log(deckInfo);
      return deckInfo.deck_id
    } catch (e) {
      console.log("Couldn't get a new deck.");
      console.log(e);
    }
  }

export class Deck {
  constructor(deckId) {
    this.deckId = deckId
  }
  async resetDeck() {
    await fetch(BASE_API_URL + "/" + this.deckId + "/return/");
  }
  async drawCard(count) {
    try {
      const promiseCard = await fetch(
        BASE_API_URL + "/"+this.deckId + "/draw/?count=" + count
      );
      const hand = await promiseCard.json();
      return hand
    } catch (e) {
      console.log("Unable to draw a card.");
      console.log(e);
    }
  }
}
