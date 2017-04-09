import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';

class Cards extends Component {

	get cardsList() {
		return this.props.cards.map(card =>
			<Link to={`/cards/${card.id}`}>{card.name}</Link>
		)
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
		const cards = state
		return {
			cards,
		}
	},
{})(Cards)
