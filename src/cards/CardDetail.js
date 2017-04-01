import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCardDetail } from '../actions'

class CardDetail extends Component {

	constructor(props) {
		super(props)

	}

	componentDidMount() {
		this.props.fetchCardDetail(this.props.params.id)
	}

	get cardInfo() {
		if (this.props.cards.length > 15) {

			return (
				<ul>
					<li>{this.props.cards[this.props.params.id-2].name}</li>
					<li>{this.props.cards[this.props.params.id-2].rank}</li>
					<li>{this.props.cards[this.props.params.id-2].description}</li>
					<li>{this.props.cards[this.props.params.id-2].action}</li>
				</ul>
			)
		}

		return null
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
	(state) => {
		// debugger
		const cards = state
		return {
			cards,
		}
	},
{ fetchCardDetail })(CardDetail)
