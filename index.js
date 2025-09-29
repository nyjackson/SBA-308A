// All logic for index elements
import { getNewDeck, Deck } from './cardAPI.js';
import {Player, ComputerPlayer, caboActions, blackjackActions} from './playerUtil.js'
//const availGames = ["BlackJack", "Cabo"];
const boardSides = document.getElementsByClassName("board-side");
const actionsDiv = document.getElementById("actions-section")
const startBtn = document.getElementById("start")

function loadGame(gameSelected){
    switch(gameSelected){
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

startBtn.addEventListener("click", loadGame("blackjack"))

async function blackjack(){
console.log("Starting BlackJack")
//const name = prompt("What's your name?")
const player = new Player()
const computer = new ComputerPlayer()
const deck = new Deck(await getNewDeck())
const startingCards = await deck.drawCard(2)
player.addToPile(startingCards) // cardsDrawn.cards
//console.log(player)
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

function createActionButtons(gameSelected){
    actionsDiv.innerHTML = ""
    //const selection = gameSelected + "Actions"
    console.log(gameSelected)
    for(let i = 0; i < blackjackActions.length;i++){
        const btn = document.createElement("button")
        btn.classList.add("action-btn")
        btn.textContent = blackjackActions[i]
        actionsDiv.appendChild(btn)
    }
}

//testing

const cardCrafted = craftCard({
  code: "6H",
  image: "https://deckofcardsapi.com/static/img/6H.png",
  images: {
    svg: "https://deckofcardsapi.com/static/img/6H.svg",
    png: "https://deckofcardsapi.com/static/img/6H.png",
  },
  value: "6",
  suit: "HEARTS",
}, "front");
const cardCrafted2 = craftCard({
  code: "6H",
  image: "https://deckofcardsapi.com/static/img/6H.png",
  images: {
    svg: "https://deckofcardsapi.com/static/img/6H.svg",
    png: "https://deckofcardsapi.com/static/img/6H.png",
  },
  value: "6",
  suit: "HEARTS",
});

boardSides[0].appendChild(cardCrafted);
boardSides[0].appendChild(cardCrafted2);