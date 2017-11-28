import React, { Component } from 'react';


export default class UserStats extends Component {
	constructor(props) {
		super(props);

		this.state = {
			stats : {}
		}
	}

	componentDidMount() {
		console.log(this.props);
		console.log("CDM = " + this.props.benchmark);
		this.setState({stats: this.formatBenchmark()});
		console.log(this.state.stats);
  	}

  	formatBenchmark = () => {
		console.log("formatBenchmark working");
		console.log("props.benchmark = " + this.props.benchmark);
		let obj = this.props.benchmark;
		console.log("OBJ = " + obj);
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

		console.log("props.benchmark (outside) = " + this.props.benchmark);
		let arr =[];
		let obj = this.formatBenchmark(this.state.stats);
		console.log('Inside of User Stats ' + JSON.stringify(obj));
		for (let i in obj) {
			arr.push(
				<li key={i} className="collection-item avatar">
					<img src="http://workoutboss.com/wp-content/uploads/2012/04/WOB-Logo-625x663.jpg" alt="" className="circle" />
					<span className="title">{i}</span>
					<p onClick={()=> alert("wow")}>{obj[i]} 
					</p>
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




