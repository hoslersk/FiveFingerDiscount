import React, { Component } from 'react';
import { Link } from 'react-router'
import Placemat from './components/Placemat'
import './App.css';

class App extends Component {

	get cardsLink() {
			return <Link to="/cards">Cards List</Link>
	}
	get gamesLink() {
			return <Link to="/games">Games List</Link>
	}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Five Finger Discount...</h2>
        </div>
				{this.cardsLink}
				{this.gamesLink}
        {this.props.children}
				<Placemat />
      </div>
    );
  }
}

export default App;
