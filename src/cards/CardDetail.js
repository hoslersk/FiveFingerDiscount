import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardDetail extends Component {

	get cardInfo() {

		return (
			<ul>
				<li>{this.props.card.name}</li>
				<li>{this.props.card.rank}</li>
				<li>{this.props.card.description}</li>
				<li>{this.props.card.action}</li>
			</ul>
		)
	}

	render() {
		return (
			<div>
				{this.cardInfo}
			</div>
		)
	}
}

export default connect(
	(state, ownProps) => {
		const card = state.cards.find(card => card.id == ownProps.params.id)
		return {
			card,
		}
	},
{})(CardDetail)
