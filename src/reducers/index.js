export default function cardsReducer(state=[],action) {
	switch (action.type) {
		case 'FETCH_CARDS':
			state.cards = action.payload
			return state
		case 'FETCH_CARD_DETAIL':
			state.card = action.payload
			return state
		default:
			return state;
	}
}
