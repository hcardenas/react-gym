import React, { Component } from 'react';
import {Row, lock, lock_open} from 'react-materialize';
import UserBio from '../../components/UserBio';
import UserVid from '../../components/UserVid';
import UserStats from '../../components/UserStats';
import Toast from '../../components/Toast';
import API from '../../utils/API';


export default class Home extends Component {

	state = {

		user: {},
		stats: {},
		sessions: []

	}

	componentDidMount() {
		API.getUsername(this.props.match.params.user)
		.then(data => {
			this.setState({
				user: data.data, 
				stats: data.data.benchmark, 
				sessions: data.data.sessions
			});
				console.log("query = " + JSON.stringify(this.state.user))});
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
						<Row>
							<Toast />
						</Row>
					</div>
				</Row>
				
			</div>
		);
	}
}
