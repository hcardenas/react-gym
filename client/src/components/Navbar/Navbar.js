import React, { Component } from 'react';

import {Navbar, NavItem, Icon, Dropdown} from 'react-materialize';
import * as firebase from 'firebase';

export default class Nav extends Component {
	



	render() {

		return (

			<Navbar brand='logo' right>
				<NavItem href='/'><Icon left>home</Icon>Home</NavItem>
				<NavItem href='/public'><Icon left>public</Icon>Public</NavItem>
				<Dropdown trigger={<NavItem><Icon left>person</Icon>{firebase.auth().currentUser.displayName}</NavItem>}>
					<NavItem>Username</NavItem>
					{(this.props.isUserlogged === false ? "" : <NavItem href='/' onClick={ () => {this.props.signOutUser()} }>Logout</NavItem>)}
				</Dropdown>
			</Navbar>

		);
	}
}




