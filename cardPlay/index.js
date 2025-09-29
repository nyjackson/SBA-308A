// All logic for index elements
import { getNewDeck, Deck } from './cardAPI.js';
import { Player, ComputerPlayer, blackjackActions } from './playerUtil.js'
//const availGames = ["BlackJack", "Cabo"];
export const boardSides = document.getElementsByClassName("board-side");
const actionsDiv = document.getElementById("actions-section")
const startBtn = document.getElementById("start")


function loadGame(e, gameSelected = "blackjack") {
    switch (gameSelected) {
        case 'blackjack':
            console.log("BlackJack selected. Loading Game...")
            createActionButtons('blackjack')
            blackjack()
            break;
        case 'cabo':
            console.log("Cabo selected. Loading Game...")
            createActionButtons('cabo')
            break;
        default:
            console.log("Incorrect game selected. Try Again.")
    }
}

startBtn.addEventListener("click", loadGame)
//actionsDiv.addEventListener("click", takeBlackjackAction)

async function blackjack() {
    console.log("Starting BlackJack")
    //const name = prompt("What's your name?")
    const player = new Player()
    const computer = new ComputerPlayer()
    const deck = new Deck(await getNewDeck())
    const plyrStartingCards = await deck.drawCard(2)
    const compStartingCards = await deck.drawCard(2)
    player.addToPile(plyrStartingCards) // cardsDrawn.cards
    computer.addToPile(compStartingCards)
    //const hitCard = await deck.drawCard(1)
    //need to send the result of the hitCard to the corresponding button to start the action needed.
    actionsDiv.addEventListener("click", async e => {
        const actions = document.getElementsByClassName("action-btn")
        const target = e.target.textContent
        console.log(target)
        for (let i = 0; i < actions.length; i++) {
            if (target == actions[i].textContent) {
                switch (target) {
                    case 'Hit':
                        player.addToPile(await deck.drawCard(1))
                        break;
                    case 'Stay':
                        let again = true
                        while(again){
                        console.log("Start Computer Turn Here")
                        again = computer.blackJackLogic(await deck.drawCard(1))
                        }
                        if((player.checkTotal() > 21 && computer.checkTotal() < 22)
                    || (computer.checkTotal() > player.checkTotal() && computer.checkTotal() < 22)){
                            endCondition("Computer")
                        }
                        else if((computer.checkTotal() > 21 && player.checkTotal() < 22) 
                        || (player.checkTotal() > computer.checkTotal() && player.checkTotal() < 22)){
                            endCondition("Player")
                        }
                        player.reset(deck.deckId)
                        computer.reset(deck.deckId)
                        deck.resetDeck()
                        break;
                    case 'Surrender':
                        endCondition("Computer")
                        break;
                    default:
                        console.log("Incorrect Action given. Error.")
                        break;
                }
            }
        }
    });

}

function endCondition(winner){
    let winMessage = `Game Over!
    ${winner} has won!
    Play Again?`
    console.log(winMessage)
    const messageBox = document.getElementById("msg-box")
    const p = document.createElement("p")
    const btn = document.createElement("button")
    p.textContent = winMessage 
    btn.textContent = "Play Again?"
    btn.addEventListener("click", () => {
        clearBoard()
        loadGame()
    })
    messageBox.appendChild(p)
    messageBox.appendChild(btn)
}

export function craftCard(card = null, side = "back") {
    // card is an object with code, image, images, value, suit
    const frag = document.createDocumentFragment();
    const cardBackImg = "https://deckofcardsapi.com/static/img/back.png";
    const cardFrontImg = card.image;
    const cardBackDiv = document.createElement("div");
    const cardFrontDiv = document.createElement("div");
    const frontImg = document.createElement("img");
    const backImg = document.createElement("img");

    frontImg.src = cardFrontImg;
    backImg.src = cardBackImg;
    frontImg.alt = `${card.value} of ${card.suit}`
    backImg.alt = "Back of a Card";

    cardBackDiv.appendChild(backImg);
    cardFrontDiv.appendChild(frontImg);

    cardBackDiv.classList.add("card");
    cardFrontDiv.classList.add("card");
    side.trim() == "front" ? frag.appendChild(cardFrontDiv) : frag.appendChild(cardBackDiv);
    // if statement here to determine whether to show back or front of card then add to frag
    return frag;
}

function createActionButtons(gameSelected) {
    actionsDiv.innerHTML = ""
    //const selection = gameSelected + "Actions"
    console.log(gameSelected)
    for (let i = 0; i < blackjackActions.length; i++) {
        const btn = document.createElement("button")
        btn.classList.add("action-btn")
        btn.id = blackjackActions[i].trim()
        console.log(btn.id)
        btn.textContent = blackjackActions[i]
        actionsDiv.appendChild(btn)
    }
}

function clearBoard(){
    for(let i = 0; i < boardSides.length;i++){
        while(boardSides[i].firstChild)
            {
                boardSides[i].removeChild(boardSides[i].firstChild)
            }
    }
}