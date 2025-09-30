import {loadAllCards,loadSpecificCards, randomCard, searchFor} from './tarotAPI.js'
const navMenuLinks = document.getElementById("nav-menu-links")
const searchBtn = document.getElementById("submit")
export const cardGallery = document.getElementById("card-gallery")

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
        default:
            console.log("hit default")
            break;
    }
}


navMenuLinks.addEventListener("click", navInteraction)
searchBtn.addEventListener("click",searchFor)