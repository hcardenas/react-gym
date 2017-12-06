import React, { Component } from 'react';
import'./UserBio.css';



export default class UserBio extends Component {
	render() {
		return (
			<div className="col m12">
		        <div className="card-panel grey lighten-5 z-depth-3 border">
		          <div className="row valign-wrapper">
		            <div className="col m5">
		              <img src={this.props.pic} alt="" className="bio-img circle responsive-img" /> 

		            </div>
		            <div className="col m7">
		              <span className="black-text">
		                {this.props.bio}
		              </span>
		            </div>
		          </div>
		        </div>
		    </div>
		);
	}
}




