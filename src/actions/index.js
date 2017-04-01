export const BASE_URL = 'http://127.0.0.1:8000/'


export function fetchCards(){
  const cards = fetch(`${BASE_URL}cards`).then((response) => {return response.json()}).then((cardsPayload) => {return cardsPayload})
  return {
    type: 'FETCH_CARDS',
    payload: cards,
  }
}
