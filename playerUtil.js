import { BASE_API_URL, deckId } from "./cardAPI.js"

export class Player{
    constructor(name = "player"){
        this.name = name
        this.pileId = "player"
        this.pileTotal = 0
        this.hand = []
    }
    async lookAtCards(){ //incorrect, lists all piles
        // https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/list/
        const handLink = BASE_API_URL+deckId+"/pile/"+this.pileId+"/list/"
        const cards = await fetch(handLink)
        console.log(cards)
        // cards[this.name].cards
    }
    checkTotal(){
        if(this.pileTotal > 21){
            console.log("Bust. Hand total is greater than 21.")
        }
        return this.pileTotal
    }
    // 
// Add to Pile
// https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/add/?cards=AS,2S
    async addToPile(cardsToAdd){
        const pileLink = BASE_API_URL+deckId+"/pile/"+this.pileId+"/add/?cards="+cardsToAdd
        const addCard = await fetch(pileLink)
        console.log(addCard)
        console.log(cardsToAdd, "has been added to ", this.name, "'s hand")
    
    }
}

export class ComputerPlayer extends Player{
    constructor(name = "Computer"){
        super(name)
        this.pileId = "computer"
    }
    blackJackLogic(){
        // if total is at least 17 then stay, if lower then that hit and draw a card
        
    }
}