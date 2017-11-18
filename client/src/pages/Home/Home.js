import React, { Component } from 'react';
import {Row} from 'react-materialize';
import UserBio from '../../components/UserBio';
import UserVid from '../../components/UserVid';
import UserStats from '../../components/UserStats';
import API from '../../utils/API';


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
		}
	}

	componentDidMount() {
		console.log("inside componentDidMount make Api call to get info");
		// API.getFireBaseUser(firebase.auth().currentUser.uid).then(data =>)
	}

	render() {
		return (
			<div>
				<Row>	
					<div className="col m6 " >
						<Row className="center-align">					
							<UserBio pic={this.state.user_pic} bio={this.state.user_bio}/>	
						</Row>
						<Row>
							<div>
								<UserStats user_stats={this.state.user_stats}/>
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
