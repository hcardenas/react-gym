import React, { Component } from 'react';
import {Collapsible, CollapsibleItem} from 'react-materialize';

export default class PublicUserVid extends Component {

	render() {
		return (
			
			<div className="col m12" > 
				<Collapsible accordion>
				{
					this.props.sessions.map((element) => (						 
						   
								<CollapsibleItem header={`Title: ${element.title} Date: ${element.date} Score: ${element.score}`} icon='featured_video' key={element.title}>
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




