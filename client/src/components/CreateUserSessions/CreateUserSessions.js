import React, { Component } from 'react';
import API from '../../utils/API';
import {Row, Input} from 'react-materialize';
import {ToastContainer, toast} from 'react-toastify';
import {css} from 'glamor';


export default class CreateUserSessions extends Component {

	state = {
		title: "WOD",
		date: "00-00-0000",
		url_video: "https://www.youtube.com/embed/RGPm3QiA3sI",
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
		this.notify("Session Created!");
		API.createSession({
			title: this.state.title,
			date: this.state.date,
			url_video: this.state.url_video,
			score: this.state.score
		}, this.props.user_id)
		.then(dbSession => {
			console.log("dbSession = ");
			console.log(dbSession);
		});

	};

	notify = (message)=> {
		toast( message, {
			position: toast.POSITION.TOP_CENTER
		});

	}

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
								defaultValue="https://www.youtube.com/embed/RGPm3QiA3sI"
								label="url" s={12}
								onChange={(event)=>{this.handleInputChange(event)}}
								name="url_video"
							/>
						</Row>
						<Row>
							<a className="waves-effect waves-light btn" 
								onClick={this.handleFormSubmit}
							>
								Edit Session
							</a>
						</Row>
						<Row>
							<ToastContainer
							type= 'error'
							hideProgressBar={false}
							autoClose={5000}
							/>
						</Row>
		         
		      		</div>
		          </div>
		        </div>
		    </div>);
	};
}




