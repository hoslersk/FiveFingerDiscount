import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Cards from './cards/Cards.js'
import App from './App';

export default (
    <Route path="/" component={App}>
      <Route path="/cards" component={Cards} />
    </Route>

);
