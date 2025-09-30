import {searchForGames} from "./gameAPI.js"
const navBar = document.getElementById("nav")
export const searchBar = document.getElementById("card-search")
export const cardLib = document.getElementById("card-library")
export const body = document.body
export const searchBtn = document.getElementById("submit")



function menuLinkInteraction(e){
const target = e.target.textContent
console.log(target)
}

navBar.addEventListener("click", menuLinkInteraction)
searchBtn.addEventListener("click", searchForGames)

