import React, { Component } from 'react';
import {Collapsible, CollapsibleItem} from 'react-materialize';
import openSocket from 'socket.io-client';
import API from '../../utils/API';

export default class PublicUserVid extends Component {


	state = {
		socket: openSocket(`http://localhost:${process.env.PORT || 3001}`),
		sessions: this.props.sessions
	};


	render() {
		return (
			
			<div className="col m12" > 
				<Collapsible accordion>
				{
					this.props.sessions.map((element) => (						 
						   
								<CollapsibleItem header={`Title: ${element.title} Date: ${element.date} Score: ${element.score}`} icon='featured_video' key={element._id}>
									<div className= "video-container">
								         <iframe width = "300" height = "200"
								         	title={element.title}
								            src = {element.url_video}
								            frameBorder = "0" allowFullScreen></iframe>
								     </div> 
								</CollapsibleItem>
					    
							))
				}
				</Collapsible>	
			</div>
				
		);
	}
}




