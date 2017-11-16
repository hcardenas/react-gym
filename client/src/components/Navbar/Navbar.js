import React, { Component } from 'react';
import {Icon} from 'react-materialize';
import * as firebase from 'firebase';

export default class Nav extends Component {
	


	signOut = (that) => {
		this.props.that.signOutUser();
	};


	render() {
		


		return (
			<nav>
				<div className="nav-wrapper">
				<a href="/" className="brand-logo">Logo <Icon>fitness_center</Icon></a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><a href="/" >Home</a></li>
						<li><a href="/public">Public</a></li>
						{(this.props.userLoggedin ? "" : <li><a href="/" onClick={ () => {this.props.that.signOutUser()} }>Log out</a></li>   )}
						
					</ul>
				</div>
			</nav>
		);
	}
}




