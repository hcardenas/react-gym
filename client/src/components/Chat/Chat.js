import React, { Component } from 'react';
import {Input} from 'react-materialize';
import openSocket from 'socket.io-client';
import * as firebase from 'firebase'


export default class Chat extends Component {

	state = {
		messages: [],
		socket: openSocket('http://localhost:3001'),
		inputChat: "",
		user : firebase.auth().currentUser.displayName
	};

	componentDidMount = () => {
		
		this.state.socket.on('send-msg', (msg) => {
			console.log(`client recieved ${msg}`);
			var newMsg = this.state.messages;
			var user = this.state.user;
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
		e.preventDefault();
		this.state.socket.emit('new-msg', `${this.state.user}: ${this.state.inputChat}`);
		
	}

	render() {

		//let msgArr = ;

		return (
			<div>
				<ul>
					{this.state.messages.map((ele, i)=> <li key={i}>{ele}</li>)}
				</ul>
				<Input type='text' name='inputChat' onChange={this.handleInputChange}/> <button onClick={this.handleSubmit}>clickme</button> 
			</div>
		);
	}
}
