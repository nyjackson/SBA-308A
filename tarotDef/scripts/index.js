import {loadAllCards} from './tarotAPI.js'
const navMenuLinks = document.getElementById("nav-menu-links")

function navInteraction(e){
    const target = e.target.textContent
    console.log(target)

}


navMenuLinks.addEventListener("click", navInteraction)