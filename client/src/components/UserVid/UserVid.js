import React, { Component } from 'react';
import VidModal from '../VidModal';
import { Button, Icon} from 'react-materialize';


export default class UserVid extends Component {

	render() {
		return (

			this.props.sessions.map((element) => (
				 
					<div className="col m12" key={element.title}>
				        <div className="card-panel grey lighten-5 z-depth-1">
				          <div className="row valign-wrapper">
				            <div className="col m3">
				            	<p>Title: {element.title}</p>
				            	<p>date: {element.date}</p>
				            	<p>score: {element.score}</p>
				            </div>
				            
		      				<div className="col m9">
								  <VidModal />
      						</div>
				          </div>
				        </div>
				    </div>
			))		
		);
	}
}




