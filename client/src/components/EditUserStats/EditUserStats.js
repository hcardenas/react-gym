import React, { Component } from 'react';
import API from '../../utils/API';
import {ToastSuccess,ToastDanger} from 'react-toastr-basic';


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

	};

	handleInputChange = event=> {
		let value = event.target.value;
		const name = event.target.name;

		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = (name, value)=> {
		API.updateBenchmark({[name]: value}, this.props.user_stats._id)
		.then(dbBenchmark => {
			
			ToastSuccess('Benchmark Updated');
		})
		.catch(e=>{
			ToastDanger(e.message);
		});

	};

	formatBenchmark = () => {
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
							<a onClick={() => this.handleFormSubmit(obj[i], this.state[obj[i]])} 
							className="waves-effect waves-light btn deep-orange accent-2"
							>
			            		Save
			            	</a>

						</div>
					</div>
					<a href="#!" className="secondary-content"><i className="material-icons deep-orange-text text-accent-2">grade</i></a>
				</li>);
		}


		return (
			<div className="col m12">
				<ul className="collection z-depth-3 border">
			    	{arr}
			  	</ul>
			</div>
			
		);
	}
}




