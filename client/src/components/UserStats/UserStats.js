import React, { Component } from 'react';
import './UserStats.css';

export default class UserStats extends Component {
	constructor(props) {
		super(props);

		this.state = {
			stats : {}
		}
	}

	componentDidMount() {
		this.setState({stats: this.formatBenchmark()});
  	}

  	formatBenchmark = () => {

		let obj = this.props.benchmark;
    	var benchmarkObj = {
    		"Issabelle": obj.issabelle,
    		"10k Run": obj.Tenk_run,
    		"5k Run": obj.Fivek_run,
    		"3k Run": obj.Threek_run,
    		"Mile Run": obj.mile_run,
    		"Cindy": obj.cindy,
    		"Fran": obj.fran,
    		"Deadlift": obj.deadlift,
    		"Shoulder Press": obj.shoulder_press,
    		"Bench": obj.bench,
    		"Squat": obj.squat
    	};
    	return benchmarkObj;
  		};

	render() {

		let arr =[];
		let obj = this.formatBenchmark(this.state.stats);
		for (let i in obj) {
			arr.push(
				<li key={i} className="collection-item avatar">
					<img src="http://workoutboss.com/wp-content/uploads/2012/04/WOB-Logo-625x663.jpg" alt="" className="circle" />
					<span className="title">{i}</span>
					<p onClick={()=> alert("wow")}>{obj[i]} 
					</p>
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




