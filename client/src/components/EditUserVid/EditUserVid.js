import React, { Component } from 'react';
import {Tabs, Tab} from 'react-materialize';
import EditUserSessions from '../EditUserSessions';
import CreateUserSessions from '../CreateUserSessions';
import API from '../../utils/API';
import * as firebase from 'firebase';
import './EditUserVid.css';

import './EditUserVid.css';




export default class EditUserVid extends Component {


	state = {
		sessions: this.props.sessions
	};

	componentDidMount = () => {
		this.updateSessions();
	};

	updateSessions = () => {
		API.getFireBaseUser(firebase.auth().currentUser.uid)
		.then(data => {
			this.setState({ 
				sessions: data.data.sessions
			}); 
		});
	};




	createUserEdit = () => {


		let userArray = this.props.sessions.map((element) => (
				 	
					<div className="col m12" key={element.title}>
				        <div className="card-panel grey lighten-5 z-depth-3">
				          <div className="row valign-wrapper">
				            <div className="col m3">
				            	<p>Title: {element.title}</p>
				            	<p>date: {element.date}</p>
				            	<p>score: {element.score}</p>
				            </div>
				            
		      				<div className="col m9">
								  <div className= "video-container">
							         <iframe width = "300" height = "200"
							         	title={element.title}
							            src = {element.urlVideo}
							            frameBorder = "0" allowFullScreen></iframe>
							      </div>
      						</div>
				          </div>
				        </div>
				    </div>
			));

		return userArray;
	};

	render() {

		let arr = this.createUserEdit();

		let component = arr.length === 0  ? <div><h3>Sorry no sessiosn to edit</h3></div>  : arr ;

		return (
			<div>

				<Tabs className='tab-demo z-depth-1 center-align tabPadding deep-orange accent-2'>

						<Tab title="Create Sessions" >
							<br />
							<CreateUserSessions
								user_id={this.props.user_id} 
								updateSessions={this.updateSessions}
							/>
						</Tab>
						<Tab title="Edit Sessions">
							<br />
							<EditUserSessions sessions={this.state.sessions}/>
						</Tab>				
				</Tabs>
			</div>
		);
	}
	
}




