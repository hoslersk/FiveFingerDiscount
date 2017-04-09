import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';

class Games extends Component {

	get gamesList() {
		if (this.props.games) {
			return this.props.games.map(game =>
				<Link key={game.id} to={`/games/${game.id}`}> Game # {game.id}</Link>
			)
		}

		return null
	}

	render() {
		return (
			<div>
				Games Page
				{this.gamesList}
				{this.props.children}
			</div>
		)
	}
}

export default connect(
	(state) => {
		const games = state.games
		return {
			games,
		}
	},
{})(Games)
