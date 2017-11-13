import React, { Component } from 'react';
import {Row} from 'react-materialize';
import UserBio from '../../components/UserBio';



export default class Home extends Component {

	state = {
		user_id: "",
		user_bio: "This is a square image. Add the 'circle' className to it to make it appear circular.",
		user_pic: "http://via.placeholder.com/550x550"
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
							<div>
								user videos
							</div>
						</Row>
					</div>
				</Row>
			</div>
		);
	}
}
