import React, { Component } from 'react';
import * as firebase from 'firebase';


export default class UserStats extends Component {
	state = {
		stats : {}
	};
	componentDidMount() {
		this.setState({
			stats: this.props.user_stats 
		});

		console.log(firebase.auth().currentUser);

	}

	handleInputChange = event=> {
		let value = event.target.value;
		const name = event.target.name;

		this.setState({
			[name]: value
		});
	}

	handleFormSubmit = event=> {
		event.preventDefault();

		this.setState({
			stats: {}
		});
	};

	render() {

		let arr =[];
		let obj = this.state.stats;
		for (let i in obj) {
			arr.push(
				<li key={i} className="collection-item avatar">
					<img src="http://workoutboss.com/wp-content/uploads/2012/04/WOB-Logo-625x663.jpg" alt="" className="circle" />
					<span className="title">{i}</span>
					<div className="row">
						<div className="col s6 input-field">
							<input 
							type="number" 
							className="validate"
							value={this.state.stats}
							name="stats"
							onChange={this.handleInputChange}
							placeholder="Enter your stats"/>

						</div>
					</div>
					<a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
				</li>);
		}


		return (
			<div className="col m12">
				<ul className="collection z-depth-3">
			    	{arr}
			  	</ul>
			</div>
			
		);
	}
}




