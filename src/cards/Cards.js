import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';

class Cards extends Component {

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
		const cards = state.cards
		return {
			cards,
		}
	},
{})(Cards)
