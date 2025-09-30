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

