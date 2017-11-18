import React, { Component } from 'react';
import {Icon} from 'react-materialize';
import * as firebase from 'firebase';

export default class Nav extends Component {
	



	render() {

		return (
			<nav>
				<div className="nav-wrapper">
				<a href="/" className="brand-logo">Logo <Icon>fitness_center</Icon></a>
				<a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>

					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><a href="/" >Home</a></li>
						<li><a href="/public">Public</a></li>
						{(this.props.isUserlogged === false ? "" : <li><a href="/" onClick={ () => {this.props.signOutUser()} }>Log out</a></li>   )}
						
					</ul>
					<ul className="side-nav" id="mobile-demo">
						<li><a href="/" >Home</a></li>
						<li><a href="/public">Public</a></li>
						{(this.props.isUserlogged === false ? "" : <li><a href="/" onClick={ () => {this.props.signOutUser()} }>Log out</a></li>   )}
						
					</ul>
				</div>
			</nav>
		);
	}
}




