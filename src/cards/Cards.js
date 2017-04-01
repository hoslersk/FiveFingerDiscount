import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cards extends Component {

	get cardsList() {
		return this.props.cards.map(card =>
			<div>{card.name}</div>
		)
	}

	render() {
		return (
			<div>
				Cards Page
				{this.cardsList}
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
