import React, { Component } from 'react';
import Chat from '../../components/Chat';
import {Row, Collapsible} from 'react-materialize';
import PublicUserVid from '../../components/PublicUserVid';
import openSocket from 'socket.io-client';


export default class Public extends Component {
	state = {
		socket: openSocket(`http://localhost:${process.env.PORT || 3001}`),

		sessions : [
			{
				urlVideo : "https://www.youtube.com/embed/RGPm3QiA3sI",
				date: "07102017",
				title: "Fran1",
				score: "1:54"
			},
			{
				urlVideo : "https://www.youtube.com/embed/RGPm3QiA3sI",
				date: "07102017",
				title: "Fran2",
				score: "1:54"
			},
			{
				urlVideo : "https://www.youtube.com/embed/RGPm3QiA3sI",
				date: "07102017",
				title: "Fran3",
				score: "1:54"
			},
			{
				urlVideo : "https://www.youtube.com/embed/RGPm3QiA3sI",
				date: "07102017",
				title: "Fran4",
				score: "1:54"
			}
		]
	};

	componentDidMount = () => {
		console.log('inside public page we need to call API to get sessions');
		this.state.socket.on('send-session', (msg) => {
			console.log(`client new sessions message:`);
			console.log('-----------------');
			
			let newSession = this.state.sessions;
			newSession.push({
				urlVideo : "https://www.youtube.com/embed/RGPm3QiA3sI",
				date: "07102017",
				title: "Fran4",
				score: "1:54"
			});
			
			this.setState({
				messages : newSession
			});
			
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

