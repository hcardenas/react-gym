import React, { Component } from 'react';
import {Row} from 'react-materialize';
import UserBio from '../../components/UserBio';
import UserVid from '../../components/UserVid';
import UserStats from '../../components/UserStats';
import API from '../../utils/API';
import EditUserBio from '../../components/EditUserBio';
import EditUserStats from '../../components/EditUserStats';
import EditUserVid from '../../components/EditUserVid'
import * as firebase from 'firebase';

export default class Home extends Component {

	state = {
		user_id: "",
		user_bio: "This is a square image. Add the 'circle' className to it to make it appear circular.",
		user_pic: "http://via.placeholder.com/550x550",
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
		],
		user_stats : {
			squat : 365,
			bench: 265,
			shoulderPress: 185,
			deadlift: 415,
			fran: "2:50",
			cindy: "19r",
			mileRun: "6:30",
			threeKRun: "24:00",
			fiveKRun: "24:00",
			tenKRun: "24:00",
			issabelle: "7:00"
		},
		text: "",
		editing: false,
		user: {},
		stats: {},
		sessions: []
	}

	componentDidMount() {
		console.log("inside componentDidMount make Api call to get info");
		// API.getFireBaseUser(firebase.auth().currentUser.uid).then(data =>)
		console.log("inside componentDidMount make Api call to get info");
		API.getFireBaseUser(firebase.auth().currentUser.uid)
		.then(data => {this.setState({user: data.data, stats: data.data.benchmark, sessions: data.data.sessions}); });
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
								<EditUserStats user_stats={this.state.stats}/>
							</div>
						</Row>

					</div>				
					<div className="col m6 center-align">
						<Row>
							<EditUserVid sessions={this.state.sessions}/>
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
							    	<a className="btn-floating red">
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