import React, { Component } from 'react';
import {Tabs, Tab} from 'react-materialize';
import EditUserSessions from '../EditUserSessions';
import CreateUserSessions from '../CreateUserSessions';

export default class EditUserVid extends Component {


	state = {
		sessions: []
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
				<Tabs className='tab-demo z-depth-1 center-align'>
						<Tab title="Create Sessions" >
							<br />
							<CreateUserSessions
								user_id={this.props.user_id} 
							/>
						</Tab>
						<Tab title="Edit Sessions">
							<br />
							<EditUserSessions sessions={this.props.sessions}/>
						</Tab>				
				</Tabs>
			</div>
		);
	}
	
}




