# SBA-308A: JavaScript Web Application #
Tarotific - A Tarot Card Information Application

All card names, descriptions, and divinatory meanings from TarotAPI and the images attained from Krates98's TarotCard API repo are according to AE Waite's "Pictorial Key to the Tarot" (1910), the companion to the Rider-Waite-Smith (RWS) deck in which most newer decks are based upon.

## Purpose: ##
This assessment measures my capability to implement advanced JavaScript tools and features in a practical manner by demonstrating my use of asynchronous javascript, API use, and modules.

### Objectives: ###
- Use asynchronous JavaScript tools to build a responsive web application.
- Demonstrate understanding of the JavaScript event loop.
- Generate asynchronous code using Promises and async/await syntax.
- Use fetch and/or Axios to interact with an external web API.
- Organize files using modules and imports.

## Installation/Access: ##
1. Clone GitHub Repo
2. Open index.html in the browser or open via Live Server

## Resource Links: ##
- [Tarot API](https://tarotapi.dev/)
- [Coolors](https://coolors.co/c9e4ca-87bba2-55828b-3b6064-364958)
- [Tarot Images](https://github.com/krates98/tarotcardapi/tree/main/images)
- [Google Fonts](https://fonts.google.com/share?selection.family=Alumni+Sans+Pinstripe:ital@0;1|Eagle+Lake)

## Scripts & Functions: Definitions & Usage ##

### index.js ###
This JS file contains nav bar interaction and the html element event listener methods needed for functionality.

- navInteraction: starts the right process given the selected text in the nav bar.
- initialLoad: loads About Page on first load

### tarotAPI.js ###
This JS file contains async/await and fetch Promise interaction using the Tarot API. 

- loadAllCards: gets all available cards and inserts them into the gallery.
- loadSpecificCards: gets cards with the searched keyword(s) included
- randomCard: gets a random card
- searchFor: looks for the corresponding card using the keyword from the search bar

### uiHelpers.js ###
Contains html element creation functions. 

- createTarotCard: creates a tarot card to display
- uploadCard: adds the card to the gallery
- clearCards: clears all cards from the gallery
- getImage: creates the cards' corresponding image located in "./images"
- getTarotInfo: creates the corresponding tarot card's information
- craftAbout: creates the about section
