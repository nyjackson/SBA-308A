import {searchForGames} from "./gameAPI.js"
const navBar = document.getElementById("nav")
export const searchBar = document.getElementById("game-search")
export const gameLib = document.getElementById("game-library")
export const body = document.body
const searchBtn = document.getElementById("submit")



function menuLinkInteraction(e){
const target = e.target.textContent
console.log(target)
}

navBar.addEventListener("click", menuLinkInteraction)
searchBtn.addEventListener("click", searchForGames)

export function showGames(games){
    const frag = document.createDocumentFragment()
    for(let i = 0; i < games.length; i ++){
    const game = games[i]
    console.log(game)
    const div = document.createElement("div")
    const title = document.createElement("h3")
    const img = document.createElement("img")
    div.classList.add("game")
    //
    if(game.image == null && game.screenshots !== null){
        img.src = game.screenshots[0]
    }
    else{
     img.src = game.image
    }
    title.textContent = game.name
    div.appendChild(img)
    div.appendChild(title)
    frag.appendChild(div)
    }
    gameLib.appendChild(frag)
    
}

export function clearGames(){
    while(gameLib.firstChild){
        gameLib.removeChild(gameLib.firstChild)
    }
}