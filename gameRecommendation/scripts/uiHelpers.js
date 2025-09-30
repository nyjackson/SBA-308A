import {gameLib} from './index.js'
export function showGames(games){
    const frag = document.createDocumentFragment()
    for(let i = 0; i < games.length; i ++){
    const game = games[i]
    const div = createGameCard(game)
    frag.appendChild(div)
    }
    gameLib.appendChild(frag)
    
}

export function clearGames(){
    while(gameLib.firstChild){
        gameLib.removeChild(gameLib.firstChild)
    }
}

function createGameCard(game){
    console.log(game)
    const div = document.createElement("div")
    const title = document.createElement("h3")
    const img = document.createElement("img")
    div.classList.add("game")
    //
    if(game.image == null && game.screenshots !== null){
        img.src = game.screenshots[0]
        img.alt = `Screenshot of ${game.name}`
    }
    else if(game.image == null && game.screenshots == null){
        img.alt = `No image loaded.`
    }
    else{
     img.src = game.image
    }
    title.textContent = game.name
    div.appendChild(img)
    div.appendChild(title)
    return div
}

function showError(message){
    const frag = document.createDocumentFragment()
    const div = document.createElement("div")
    const p = document.createElement("p")
    p.textContent = message
    div.appendChild(p)
    frag.append(div)
    return frag
}