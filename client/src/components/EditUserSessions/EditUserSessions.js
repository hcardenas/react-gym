import React, { Component } from 'react';
import API from '../../utils/API';
import {Row, Input} from 'react-materialize';


export default class EditUserSessions extends Component {

	state = {
		sessions : this.props.sessions
	};

	componentDidMount = ()=> {
		console.log("we need to set state sessions here at EditUserSessions Component");
		
		// this.setState({
		// 	stats: this.props.sessions 
		// });
	};

	handleInputChange = (event, index)=> {

		let value = event.target.value;
		const name = event.target.name;
		let arr = this.state.sessions;
		arr[index][name] = value; 
		this.setState({
			sessions: arr
		});
	};

	handleFormSubmit = (data, id, index)=> {
		API.updateSession(data, id)
		.then(dbSession => {
			console.log("dbSession = ");
			console.log(dbSession);
			let newArr = this.state.sessions
			newArr[index] = dbSession.data;
			this.setState({
				sessions: newArr
			});
		})

	};

	handleFormDelete = (id)=> {
		API.deleteSession(id)
		.then(dbSession => {
			console.log("dbSession = ");
			console.log(dbSession);
			let newArr = this.state.sessions.filter(item => !(item._id === dbSession.data._id))
			this.setState({
				sessions: newArr
			});
		})

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
									onClick={() => this.handleFormSubmit(
										{
											url_video: element.url_video,
											date: element.date,
											title: element.title,
											score: element.score
										},
										element._id, i
										)}
								>
									Edit Session
								</a>
								<a className="waves-effect waves-light btn" 
									onClick={() => this.handleFormDelete(element._id)}
								>
									Delete Session
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




