import { BASE_API_URL, deckId } from "./cardAPI"


export class Player{
    constructor(name){
        this.name = name
        this.pileId = ""
    }
    async lookAtCards(){
        // https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/list/
        const handLink = BASE_API_URL+deckId+"/pile/"+this.pileId+"/list/"
        console.log(cardsToAdd, "has been added to ", this.name, "'s hand")
    }
    // 
// Add to Pile
// https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/add/?cards=AS,2S
    async addToPile(cardsToAdd){
        const pileLink = BASE_API_URL+deckId+"/pile/"+this.pileId+"/add/?cards="+cardsToAdd
        console.log(cardsToAdd, "has been added to ", this.name, "'s hand")
    }
}