import React, { Component } from 'react';
import Chat from '../../components/Chat';
import {Row, Collapsible} from 'react-materialize';
import PublicUserVid from '../../components/PublicUserVid';


export default class Public extends Component {
	state = {
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

