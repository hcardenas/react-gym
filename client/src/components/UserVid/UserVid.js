import React, { Component } from 'react';

export default class UserVid extends Component {

	render() {
		let moment = require('moment');
		console.log(moment(new Date()).format('Do MMMM YYYY'));
		return (
			

			this.props.sessions.map((element, i) => {
					return( <div className="col m12" key={i}>
				        <div className="card-panel grey lighten-5 z-depth-3 border">
				          <div className="row valign-wrapper">
				            <div className="col m3">
				            	<p>Title: {element.title}</p>
				            	<p>date: {moment(element.date).format('Do MMMM YYYY')}</p>
				            	<p>score: {element.score}</p>
				            </div>
				            
		      				<div className="col m9">
								  <div className= "video-container">
							         <iframe width = "300" height = "200"
							         	title={element.title}
							            src = {element.url_video}
							            frameBorder = "0" allowFullScreen></iframe>
							      </div>
      						</div>
				          </div>
				        </div>
				    </div>);
			})		
		);
	}
}




