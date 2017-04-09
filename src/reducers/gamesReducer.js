export default function gamesReducer(state=[],action) {
	switch (action.type) {
		case 'FETCH_GAMES':
			return action.payload
		case 'FETCH_GAME_DETAIL':
			state.game = action.payload
			return state
		default:
			return state;
	}
}
