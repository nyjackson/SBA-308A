// cac9746b0af44734a45fc0117060dc26
export const API_KEY = "cac9746b0af44734a45fc0117060dc26"
export const BASE_API_URL = "https://api.gamebrain.co/v1/games"
import {searchBar} from './index.js'
async function initialLoad(){
    const link = await fetch(BASE_API_URL, {
        method: "GET",
        headers:{
            "x-api-key":API_KEY
        }
    });

}

export async function searchForGames(e){
    let searchQuery = "?query="
    console.log(searchBar.value)
    const queryConstruction = searchBar.value.split(" ").join("+")
    searchQuery+= queryConstruction
    const gameLink = await fetch(BASE_API_URL+searchQuery, {
        method: "GET",
        headers:{
            "x-api-key":API_KEY
        }
    });
    const jsonLink = await gameLink.json()
    console.log(jsonLink)
}
