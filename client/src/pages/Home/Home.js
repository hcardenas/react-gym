import React, { Component } from 'react';
import {Row} from 'react-materialize';
import UserBio from '../../components/UserBio';
import UserVid from '../../components/UserVid';
import UserStats from '../../components/UserStats';
import API from '../../utils/API';

import * as firebase from 'firebase';


export default class Home extends Component {

	state = {
		user: {},
		stats: {},
		sessions: []
	}

	componentDidMount() {
		console.log("inside componentDidMount make Api call to get info");
		API.getFireBaseUser(firebase.auth().currentUser.uid)
		.then(data => {this.setState({user: data.data, stats: data.data.benchmark, sessions: data.data.sessions}); console.log("query = " + JSON.stringify(this.state.user))});
	}

	render() {
		return (
			<div>
				<Row>	
					<div className="col m6 " >
						<Row className="center-align">					
							<UserBio pic={this.state.user.profile_pic} bio={this.state.user.bio}/>	
						</Row>
						<Row>
							<div>
								<UserStats benchmark={this.state.stats}/>
							</div>
						</Row>

					</div>				
					<div className="col m6 center-align">
						<Row>
							<UserVid sessions={this.state.sessions}/>
						</Row>
					</div>
				</Row>
			</div>
		);
	}
}
