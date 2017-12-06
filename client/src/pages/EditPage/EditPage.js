import React, { Component } from 'react';
import {Row, lock, lock_open} from 'react-materialize';
import API from '../../utils/API';
import EditUserBio from '../../components/EditUserBio';
import EditUserStats from '../../components/EditUserStats';
import EditUserVid from '../../components/EditUserVid'
import * as firebase from 'firebase';

export default class Home extends Component {

	state = {
		text: "",
		editing: true,
		user: {},
		stats: {},
		sessions: []
	}

	componentDidMount() {
		console.log("inside componentDidMount make Api call to get info");
		// API.getFireBaseUser(firebase.auth().currentUser.uid).then(data =>)
		console.log("inside componentDidMount make Api call to get info");
		API.getFireBaseUser(firebase.auth().currentUser.uid)
		.then(data => {
			this.setState({
				user: data.data, 
				stats: data.data.benchmark, 
				sessions: data.data.sessions
			}); 
		});

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
							<EditUserBio ContentEditable
								pic={this.state.user.profile_pic} 
								bio={this.state.user.bio}
								id={this.state.user._id}/>
							
						</Row>
						<Row>
							<div>
								<EditUserStats 
									user_stats={this.state.stats}
									user_id={this.state.user._id}/>
							</div>
						</Row>

					</div>				
					<div className="col m6 center-align">
						<Row>
							<EditUserVid 
								sessions={this.state.sessions} 
								user_id={this.state.user._id}
							/>
						</Row>
					</div>
				</Row>
				<Row>
					<div className="col s1 offset-11">
						<div className="fixed-action-btn">
							<a href={this.state.editing ? '/home' : '/edit'} className="btn-floating btn-large deep-orange accent-2"> 
								<i className="large material-icons">{(this.state.editing ? "lock_open" : "lock")}</i>
							</a>
						</div>
					</div>
				</Row>
				
			</div>
		);
	}
}