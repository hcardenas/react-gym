import React, { Component } from 'react';
import API from '../../utils/API';
import {Row, Input} from 'react-materialize';


export default class EditUserSessions extends Component {

	state = {
		sessions : [{
			title: "fran",
			date: "00-00-0000",
			url_video: "www.youtube.com/embed/GXJn6_nHB1E",
			score: "2:31"
		},
		{
			title: "fran",
			date: "00-00-0000",
			url_video: "www.youtube.com/embed/GXJn6_nHB1E",
			score: "2:31"
		}]
	};

	componentDidMount() {
		console.log("we need to set state sessions here at EditUserSessions Component");
		// this.setState({
		// 	stats: this.props.sessions 
		// });
	};

	handleInputChange = (event, index)=> {

		let value = event.target.value;
		const name = event.target.name;
		console.log(`index: ${index} value: ${value} name: ${name}`);
		let arr = this.state.sessions;
		arr[index][name] = value; 
		this.setState({
			sessions: arr
		});
	};

	handleFormSubmit = ()=> {
		console.log("handleFormSubmit on EditUserSessions needs to call API");
		alert (`sessions updated ${JSON.stringify(this.state)}`);
		// API.updateBenchmark({[name]: value}, this.props.user_stats._id)
		// .then(dbBenchmark => {
		// 	console.log("dbBenchmark = ");
		// 	console.log(dbBenchmark);
		// })

	};

	render() {
		let arr = this.state.sessions.map(
			(element, i) => (	 
				<div className="col m12" key={i}>
			        <div className="card-panel grey lighten-5 z-depth-3">
			          <div className="row valign-wrapper">
			            <div className="col m12">
				            <Row>
								<Input 
									defaultValue={element.title}  
									label="Title" s={12} 
									onChange={(event)=>{this.handleInputChange(event, i)}}
									name="title"
								/>
								<Input 
									defaultValue={element.date} 
									label="date" s={12}
									onChange={(event)=>{this.handleInputChange(event, i)}}
									name="date"
								/>
								<Input 
									defaultValue={element.score} 
									label="Score"  s={12}
									onChange={(event)=>{this.handleInputChange(event, i)}}
									name="score"
								/>
								<Input 
									defaultValue={element.url_video} 
									label="url" s={12}
									onChange={(event)=>{this.handleInputChange(event, i)}}
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
			         
			      		</div>
			          </div>
			        </div>
			    </div>
			)	
		);
		return ( <div>{arr}</div>);
	};
}




