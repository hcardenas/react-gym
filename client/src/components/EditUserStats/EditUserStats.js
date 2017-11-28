import React, { Component } from 'react';
import * as firebase from 'firebase';


export default class UserStats extends Component {
	state = {
		stats : {},
		issabelle: "",
		Tenk_run: "",
		Fivek_run: "",
		Threek_run: "",
		mile_run: "",
		cindy: "",
		fran: "",
		deadlift: "",
		shoulder_press: "",
		bench: "",
		squat: ""
	};
	componentDidMount() {
		this.setState({
			stats: this.props.user_stats 
		});

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

	formatBenchmark = () => {
		let obj = this.props.user_stats;
    	var benchmarkObj = {
    		"Issabelle": "issabelle",
    		"10k Run": "Tenk_run",
    		"5k Run": "Fivek_run",
    		"3k Run": "Threek_run",
    		"Mile Run": "mile_run",
    		"Cindy": "cindy",
    		"Fran": "fran",
    		"Deadlift": "deadlift",
    		"Shoulder Press": "shoulder_press",
    		"Bench": "bench",
    		"Squat": "squat"
    	};
    	return benchmarkObj;
  	};

	render() {
		console.log(`userstats render`);
		console.log(this.state.stats);
		let arr =[];
		let obj = this.formatBenchmark();
		for (let i in obj) {
			arr.push(
				<li key={i} className="collection-item avatar">
					<img src="http://workoutboss.com/wp-content/uploads/2012/04/WOB-Logo-625x663.jpg" alt="" className="circle" />
					<span className="title">{i}</span>
					<div className="row">
						<div className="col s6 input-field">
							<input  
							className="validate"
							value={this.state[obj[i]]}
							name={obj[i]}
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




