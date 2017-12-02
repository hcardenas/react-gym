import React, { Component } from 'react';
import API from '../../utils/API';
import {Row, Input} from 'react-materialize';


export default class CreateUserSessions extends Component {

	state = {
		title: "WOD",
		date: "00-00-0000",
		url_video: "www.youtube.com/embed/GXJn6_nHB1E",
		score: "000"	
	};

	componentDidMount() {
		
	};

	handleInputChange = (event)=> {

		let value = event.target.value;
		const name = event.target.name;
		console.log(`value: ${value} name: ${name}`);

		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = ()=> {
		console.log("handleFormSubmit on CreateUserSessions needs to call API");
		alert (`sessions Created ${JSON.stringify(this.state)}`);
		// API.updateBenchmark({[name]: value}, this.props.user_stats._id)
		// .then(dbBenchmark => {
		// 	console.log("dbBenchmark = ");
		// 	console.log(dbBenchmark);
		// })

	};

	render() {
		return ( 
			<div className="col m12">
		        <div className="card-panel grey lighten-5 z-depth-3">
		          <div className="row valign-wrapper">
		            <div className="col m12">
			            <Row>
							<Input 
								defaultValue="WOD"  
								label="Title" s={12} 
								onChange={(event)=>{this.handleInputChange(event)}}
								name="title"
							/>
							<Input 
								defaultValue="00-00-0000" 
								type="date"
								label="date" s={12}
								onChange={(event)=>{this.handleInputChange(event)}}
								name="date"
							/>
							<Input 
								defaultValue="000" 
								label="Score"  s={12}
								onChange={(event)=>{this.handleInputChange(event)}}
								name="score"
							/>
							<Input 
								defaultValue="www.youtube.com/embed/GXJn6_nHB1E"
								label="url" s={12}
								onChange={(event)=>{this.handleInputChange(event)}}
								name="url_video"
							/>
						</Row>
						<Row>
							<a className="waves-effect waves-light btn" 
								onClick={this.handleFormSubmit}
							>
								Create Session
							</a>
						</Row>
		         
		      		</div>
		          </div>
		        </div>
		    </div>);
	};
}




