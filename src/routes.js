import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Cards from './cards/Cards'
import CardDetail from './cards/CardDetail'
import Games from './games/Games'
import GameDetail from './games/GameDetail'
import App from './App';

export default (
    <Route path="/" component={App}>
      <Route path="/cards" component={Cards}>
				<Route path="/cards/:id" component={CardDetail} />
			</Route>
      <Route path="/games" component={Games}>
        <Route path="/games/:id" component={GameDetail} />
      </Route>
    </Route>

);
