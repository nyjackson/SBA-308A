import { BASE_API_URL } from "./cardAPI.js";
import { craftCard, boardSides } from "./index.js";
export const blackjackActions = ["Hit", "Stay", "Surrender"];

export class Player {
  constructor(name = "player") {
    this.name = name;
    this.pileId = "player";
    this.pileTotal = 0;
    this.boardSide = 1;
  }
  // async lookAtCards(){ //incorrect, lists all piles
  //     // https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/list/
  //     const handLink = BASE_API_URL+deckId+"/pile/"+this.pileId+"/list/"
  //     const cards = await fetch(handLink)
  //     console.log(cards)
  //     // cards[this.name].cards
  // }
  checkTotal() {
    if (this.pileTotal > 21) {
      console.log("Bust. Hand total is greater than 21.");
    }
    return this.pileTotal;
  }
    async reset(deckId){
    // https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/return/
    try{
       const pileLink =
      BASE_API_URL +
      "/" +
      deckId +
      "/pile/" +
      this.pileId +
      "/return/"
    await fetch(pileLink);
    console.log("cards sent back to deck")
    }
    catch(e){
      console.log(e)
    }
   
  }
  //
  // Add to Pile
  // https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/add/?cards=AS,2S
  async addToPile(cardsObj) {
    console.log(cardsObj);
    let cardsToAdd = "";
    const deckId = cardsObj["deck_id"];
    const cards = cardsObj.cards;
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      cardsToAdd += card.code;

      this.pileTotal += getCardValue(card.value, this.pileTotal);

      let side = "";
      this.boardSide == 1 ? (side = "front") : (side = "back");
      boardSides[this.boardSide].appendChild(craftCard(card, side));
    }
    const pileLink =
      BASE_API_URL +
      "/" +
      deckId +
      "/pile/" +
      this.pileId +
      "/add/?cards=" +
      cardsToAdd;
    const addCard = await fetch(pileLink);
    console.log(addCard);
    console.log("Pile Total is ", this.pileTotal);
    console.log(cardsToAdd, "has been added to ", this.name, "'s hand");
  }
}

export class ComputerPlayer extends Player {
  constructor(name = "Computer") {
    super(name);
    this.pileId = "computer";
    this.boardSide = 0;
  }
  blackJackLogic(cardToAdd) {
    // if total is at least 17 then stay, if lower then that hit and draw a card
    console.log("Comp logic here")
    if(this.pileTotal > 17){
      return false
    }
    else{
      this.addToPile(cardToAdd)
      return true
    }
  }
}

function getCardValue(value, total) {
  switch (value.trim()) {
    case "QUEEN":
      return 10;
    case "KING":
      return 10;
    case "JACK":
      return 10;
    case 'ACE':
        return total+11 > 21 ? 1 : 11 //need to test
    default:
      return parseInt(value);
  }
}
