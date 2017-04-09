import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGameDetail } from '../actions'

class GameDetail extends Component {
  componentDidMount() {
    this.props.fetchGameDetail(this.props.params.id)
  }
	get gameInfo() {
    if (this.props.game) {
      return (
        <ul>
          <li>{this.props.game.id}</li>
          <li>{this.props.game.winner.username}</li>
          {this.playersInGame}
        </ul>
      )
    }
    return 'loading butts'

	}

  get playersInGame() {
    return this.props.game.player_game.map(player => {
        return <li>{player.user.username}</li>
      }
    )
  }

	render() {
		return (
			<div>
				{this.gameInfo}
			</div>
		)
	}
}

export default connect(
	(state, ownProps) => {
		const game = state.games.find(game => game.id == ownProps.params.id)
		return {
			game,
		}
	},
{ fetchGameDetail })(GameDetail)
