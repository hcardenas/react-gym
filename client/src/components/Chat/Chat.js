import React, { Component } from 'react';
import ChatList from '../ChatList';
import openSocket from 'socket.io-client';
import * as firebase from 'firebase'
import {Row} from 'react-materialize';

import './Chat.css';



export default class Chat extends Component {

	state = {
		messages: [],
		socket: openSocket(`http://localhost:${process.env.PORT || 3001}`),
		inputChat: "",
		user : firebase.auth().currentUser.displayName
	};

	componentDidMount = () => {
		
		this.state.socket.on('send-msg', (msg) => {
			console.log(`client recieved:`);
			console.log(`${JSON.stringify(msg)}`);
			console.log('-----------------');
			var newMsg = this.state.messages;
			
			newMsg.push(msg);
			
			this.setState({
				messages : newMsg
			});
		});
	};

	handleInputChange = event => {
	    const { name, value } = event.target;
	    this.setState({
	      [name]: value
	    });
  	};

	handleSubmit = (e) => {
		//e.preventDefault();
		let obj = {
			user: this.state.user,
			msg: this.state.inputChat
		};
		
		this.state.socket.emit('new-msg', obj );
		
	}

	render() {

		//let msgArr = ;

		return (
			<div className='col m12'>
				<div className='Chat card-panel grey lighten-5 z-depth-3'>
					<div className="row" id="chatPanel">
						<div className="col m12">
							<ul>
								<ChatList messages={this.state.messages} />
							</ul>
						</div>
					</div>
					<br/><br/>

					<div className='center-align' id='inputChat'>
						<hr />
						<input 
							type='text' 
							name='inputChat' 
							onChange={this.handleInputChange}
							className='col m8'
						/> 
						

						<button onClick={this.handleSubmit} className='waves-effect waves-light btn col m3 offset-m1'>
							<i className="large material-icons">send</i>
						</button> 
					</div>
				</div>
			</div>
		);
	}
}
