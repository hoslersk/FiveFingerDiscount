import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { fetchCards,fetchGames } from './actions'
import Routes from './routes'

const store = createStore(rootReducer, applyMiddleware(ReduxPromise));
store.dispatch( fetchCards() );
store.dispatch( fetchGames() );



ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={Routes} />
	</Provider>,
	document.getElementById('root')

);
