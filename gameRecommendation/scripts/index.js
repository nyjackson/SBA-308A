import {searchForGames} from "./gameAPI.js"
const navBar = document.getElementById("nav")
export const searchBar = document.getElementById("game-search")
const searchBtn = document.getElementById("submit")

function menuLinkInteraction(e){
const target = e.target.value
}



navBar.addEventListener("click", menuLinkInteraction)
searchBtn.addEventListener("click", searchForGames)