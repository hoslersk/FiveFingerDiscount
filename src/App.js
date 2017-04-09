import React, { Component } from 'react';
import { Link } from 'react-router'
import logo from './logo.svg';
import './App.css';

class App extends Component {

	get cardsLink() {
		if (!this.props.children) {

			return <Link to="/cards">Cards List</Link>
		}

		return null
	}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
				{this.cardsLink}
        {this.props.children}
      </div>
    );
  }
}

export default App;
