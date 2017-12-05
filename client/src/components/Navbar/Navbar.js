import React, { Component } from 'react';
import {Navbar, NavItem, Icon, Dropdown, Input} from 'react-materialize';
import * as firebase from 'firebase';


export default class Nav extends Component {


	render() {
			console.log(this.props);

		return (

			<Navbar brand='logo' right>
				<NavItem href='/home'><Icon left>home</Icon>Home</NavItem>
				<NavItem href='/public'><Icon left>public</Icon>Public</NavItem>
				<NavItem><Icon left>person</Icon>{(this.props.isUserlogged === false ? "" : this.props.user.displayName)} </NavItem>
				
				{(this.props.isUserlogged === false ? "" : <NavItem href='/' onClick={ () => {this.props.signOutUser()} }>Logout</NavItem>)}
				

			</Navbar>

		);
	}
}






