import { combineReducers } from 'redux'

import cardsReducer from './cardsReducer'
import gamesReducer from './gamesReducer'

const rootReducer = combineReducers({
  cards: cardsReducer,
  games: gamesReducer
})

export default rootReducer
