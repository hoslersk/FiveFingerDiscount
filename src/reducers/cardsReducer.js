export default function cardsReducer(state=[],action) {
	switch (action.type) {
		case 'FETCH_CARDS':
			return action.payload
		case 'FETCH_CARD_DETAIL':
			return [...state, action.payload]
		default:
			return state;
	}
}
