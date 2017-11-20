import React, { Component } from 'react';
import Chat from '../../components/Chat';
import {Row, Collapsible} from 'react-materialize';
import PublicUserVid from '../../components/PublicUserVid';
import API from '../../utils/API';


export default class Public extends Component {
	state = {
		sessions : []
	};

	componentDidMount = () => {
		console.log('inside public page we need to call API to get sessions');
		API.getSessions().then(data => this.setState({sessions: data.data}));
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

