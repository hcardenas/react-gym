import React, { Component } from 'react';



export default class UserStats extends Component {
	state = {
		stats : {}
	};

	componentDidMount() {
		this.setState({
			stats: this.props.user_stats 
		});
	}

	render() {

		let arr =[];
		let obj = this.state.stats;
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




