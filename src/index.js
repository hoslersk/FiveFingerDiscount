import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux';
import cardsReducer from './reducers';
import { fetchCards } from './actions'
import Routes from './routes'

const store = createStore(cardsReducer, applyMiddleware(ReduxPromise));
store.dispatch( fetchCards() );

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={Routes} />
	</Provider>,
	document.getElementById('root')

);
