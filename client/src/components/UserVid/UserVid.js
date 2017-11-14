import React, { Component } from 'react';


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
				            
		      				<div className="video-container col m9">
        						<iframe width="853" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameBorder="0" allowFullScreen></iframe>
      						</div>
				          </div>
				        </div>
				    </div>
			))		
		);
	}
}




