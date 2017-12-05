import React, { Component, Link } from 'react';
import {Navbar, NavItem, Icon, Dropdown, Input, Button} from 'react-materialize';
import * as firebase from 'firebase';
import {browserHistory} from 'react-router';


export default class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  changeTerm = (event) => {
  	let value = event.target.value;
    this.setState(
    	{
    		searchTerm: value
    	}
    );
  }


	render() {
			console.log(this.state.searchTerm);

			let url = '/profile/' + encodeURI(this.state.searchTerm);

		return (

			<Navbar brand='logo' right>
				<NavItem href='/home'><Icon left>home</Icon>Home</NavItem>
				<NavItem href='/public'><Icon left>public</Icon>Public</NavItem>
				<NavItem href={url}><Icon left>search</Icon>Search</NavItem>
				<li><input onChange={this.changeTerm}></input></li>
				<NavItem><Icon left>person</Icon>{(this.props.isUserlogged === false ? "" : this.props.user.displayName)} </NavItem>
				
				{(this.props.isUserlogged === false ? "" : <NavItem href='/' onClick={ () => {this.props.signOutUser()} }>Logout</NavItem>)}
				

			</Navbar>

		);
	}
}






