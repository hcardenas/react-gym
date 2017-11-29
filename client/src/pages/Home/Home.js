import React, { Component } from 'react';
import {Row} from 'react-materialize';
import UserBio from '../../components/UserBio';
import UserVid from '../../components/UserVid';
import UserStats from '../../components/UserStats';
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
					</div>
				</Row>
				<Row>
					<div className="col s1 offset-11">
						<div className="fixed-action-btn">
							<a className="btn-floating btn-large red">
								<i className="large material-icons">mode_edit</i>
							</a>
							<ul>
							    <li>
							    	<a href="/edit" className="btn-floating red">
							    		<i className="material-icons">account_circle</i>
							    	</a>
							    </li>
      							<li>
      								<a className="btn-floating yellow darken-1">
      									<i className="material-icons">assessment</i>
      								</a>
      							</li>
      							<li>
      								<a className="btn-floating green">
      									<i className="material-icons">videocam</i>
      								</a>
      							</li>
							</ul>
						</div>
					</div>
				</Row>
				
			</div>
		);
	}
}
