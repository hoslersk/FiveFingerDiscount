export const BASE_URL = 'http://127.0.0.1:8000/'

export function fetchCards(){
  const cards = fetch(`${BASE_URL}cards`).then((response) => {return response.json()}).then((cardsPayload) => {return cardsPayload})
  return {
    type: 'FETCH_CARDS',
    payload: cards,
  }
}

export function fetchCardDetail(params){
  const cards = fetch(`${BASE_URL}cards/${params}`).then((response) => {return response.json()}).then((cardsPayload) => {return cardsPayload})
  return {
    type: 'FETCH_CARD_DETAIL',
    payload: cards,
  }
}

export function fetchGames(){
  const games = fetch(`${BASE_URL}games`).then((response) => {return response.json()}).then((gamesPayload) => {return gamesPayload})
  return {
    type: 'FETCH_GAMES',
    payload: games,
  }
}

export function fetchGameDetail(params){
  const games = fetch(`${BASE_URL}games/${params}`).then((response) => {return response.json()}).then((gamesPayload) => {return gamesPayload})
  return {
    type: 'FETCH_GAME_DETAIL',
    payload: games,
  }
}
