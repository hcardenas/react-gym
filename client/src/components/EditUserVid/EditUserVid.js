import React, { Component } from 'react';


export default class UserVid extends Component {

	render() {
		return (

			this.props.sessions.map((element) => (
				 
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
			))		
		);
	}
}




