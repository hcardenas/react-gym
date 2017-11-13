import React, { Component } from 'react';
import {Collection} from 'react-materialize';




export default class Home extends Component {

	state = {
		user_id : ""
	}

	componentDidMount() {
		console.log("inside componentDidMount");
	}

	render() {
		return (
			<div>	
				Home
			</div>
		);
	}
}
