import React, { Component } from 'react'
import '../App.css'

export default class Placemat extends Component {
	render() {
		return <div className="placemat">{this.props.children}</div>
	}
}
