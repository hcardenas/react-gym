import React, { Component } from 'react';
import {Row, lock, lock_open} from 'react-materialize';
import UserBio from '../../components/UserBio';
import UserVid from '../../components/UserVid';
import UserStats from '../../components/UserStats';
import Toast from '../../components/Toast';
import API from '../../utils/API';

import * as firebase from 'firebase';


export default class Home extends Component {

	state = {
		text: "",
		editing: false,

		user: {},
		stats: {},
		sessions: []

	}

	componentDidMount() {
		console.log("inside componentDidMount make Api call to get info");
		API.getFireBaseUser(firebase.auth().currentUser.uid)
		.then(data => {
			this.setState({
				user: data.data, 
				stats: data.data.benchmark, 
				sessions: data.data.sessions
			});
				console.log("query = " + JSON.stringify(this.state.user))});
	}

	onChange = (text) => {
		this.setState({ text: text });
	}

	enableEditing = ()=> {
		this.setState({ editing: true });
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
				<Row>
					<div className="col s1 offset-11">
						<div className="fixed-action-btn">


							
							<a href={this.state.editing ? '/home' : '/edit'} className="btn-floating btn-large deep-orange accent-2 z-depth-3"> 
								<i className="large material-icons">{(this.state.editing ? "lock_open" : "lock")}</i>

							</a>
						</div>
					</div>
				</Row>
				
			</div>
		);
	}
}
