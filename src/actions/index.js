export const BASE_URL = 'http://localhost:8000/'


export function fetchCards(){
  const cards = fetch(`${BASE_URL}cards`).then((response) => {return response.json()}).then((cardsPayload) => {return cardsPayload})
  return {
    type: 'FETCH_CARDS',
    payload: cards
  }
}
