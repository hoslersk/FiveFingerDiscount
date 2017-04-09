import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Cards from './cards/Cards'
import CardDetail from './cards/CardDetail'
import App from './App';

export default (
    <Route path="/" component={App}>
      <Route path="/cards" component={Cards}>
				<Route path="/cards/:id" component={CardDetail} />
			</Route>
    </Route>

);
