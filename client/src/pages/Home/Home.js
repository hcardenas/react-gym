import React, { Component } from 'react';
import {Row} from 'react-materialize';
import UserBio from '../../components/UserBio';
import UserVid from '../../components/UserVid';


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
		]
	}

	componentDidMount() {
		console.log("inside componentDidMount make Api call to get info");
	}

	render() {
		return (
			<div>
				<Row>	
					<div className="col m6 center-align" >
						<Row>
							
							<UserBio pic={this.state.user_pic} bio={this.state.user_bio}/>
							
						</Row>
						<Row>
							<div>
								user stats
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
