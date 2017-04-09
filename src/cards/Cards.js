import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
// import { fetchCards } from '../actions'

class Cards extends Component {

	// componentWillMount() {
	// 	fetchCards()
	// }
	// componentDidMount() {
	// 	fetchCards()
	// }

	get cardsList() {
		if (this.props.cards) {
			return this.props.cards.map(card =>
				<Link key={card.id} to={`/cards/${card.id}`}>{card.name}</Link>
			)
		}

		return null
	}

	render() {
		return (
			<div>
				Cards Page
				{this.cardsList}
				{this.props.children}
			</div>
		)
	}
}

export default connect(
	(state) => {
		const cards = state.cards // ? state.cards : []
		// debugger
		return {
			cards,
		}
	},
{})(Cards)
