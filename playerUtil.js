import { BASE_API_URL, deckId } from "./cardAPI"


export class Player{
    constructor(name){
        this.name = name
        this.pileId = ""
    }
    async lookAtCards(){
        // https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/list/
        const handLink = BASE_API_URL+deckId+"/pile/"+this.pileId+"/list/"
    }
}