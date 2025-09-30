import {loadAllCards, randomCard, searchFor} from './tarotAPI.js'
import {craftAbout} from "./uiHelpers.js"

const navMenuLinks = document.getElementById("nav-menu-links")
const searchBtn = document.getElementById("submit")


export const searchQ = document.getElementById("card-search")
export const cardGallery = document.getElementById("card-gallery")
export const about = document.getElementById("about")

async function navInteraction(e){
    e.preventDefault()
    const target = e.target.textContent
    console.log(target)
    switch(target){
        case 'Home - All Cards':
            await loadAllCards()
            break;
        case 'Random Card':
            await randomCard()
            break;
        case 'About':
            craftAbout()
            console.log("About Section Here")
            break;
        default:
            console.log("hit default")
            break;
    }
}

function initialLoad(){
    craftAbout()
}

initialLoad()
navMenuLinks.addEventListener("click", navInteraction)
searchBtn.addEventListener("click",searchFor)