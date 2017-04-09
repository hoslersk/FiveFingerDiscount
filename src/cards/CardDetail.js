import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchCardDetail } from '../actions'

class CardDetail extends Component {

	// componentDidMount() {
	// 	this.props.fetchCardDetail(this.props.params.id)
	// }

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
{/* fetchCardDetail */})(CardDetail)
