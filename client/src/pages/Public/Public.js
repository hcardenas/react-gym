import React, { Component } from 'react';
import Chat from '../../components/Chat';
import {Row} from 'react-materialize';
import PublicUserVid from '../../components/PublicUserVid';
import API from '../../utils/API';
import openSocket from 'socket.io-client';


export default class Public extends Component {
	state = {
		sessions : [],
		socket: openSocket(`http://localhost:${process.env.PORT || 3001}`),
	};

	componentDidMount = () => {
		console.log('inside public page we need to call API to get sessions');
		API.getSessions().then(data => this.setState({sessions: data.data}));

		this.state.socket.on('send-session', (msg) => {
			console.log(`client new sessions message:`);
			console.log('-----------------');
			
			let newSession = this.state.sessions;
			newSession.push(msg);
			this.setState({
				sessions : newSession
			});
			
		});
		this.state.socket.on('del-session', (msg) => {
			console.log(`client recieved del session:`);
			console.log(`${JSON.stringify(msg)}`);
			console.log('-----------------');
			
			let newSession = this.state.sessions.filter(elements => !(elements._id === msg));
			this.setState({sessions: newSession});

		});
	};

	render() {
		return (
			<div>
			<Row>
				
				<div className="col m6 " >
					<Row className="center-align">	
										
							<PublicUserVid sessions={this.state.sessions}/> 		
					</Row>

				</div>
							
				<div className="col m6 center-align">
					<Row>
						<Chat />
					</Row>
				</div>
			

			</Row>
			</div>
		);
	}
}

