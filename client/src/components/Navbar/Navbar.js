import React, { Component, Link } from 'react';
import {Navbar, NavItem, Icon, Dropdown, Input, Button} from 'react-materialize';
import * as firebase from 'firebase';
import './Navbar.css';



export default class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      logo: <img src='https://vectr.com/tmp/dpIPgOC1i/cOqWCgrNQ.svg?width=194.55166666666668&height=64&select=b2elbbWCVx,b4RoGEFjr,ansv38pR3&source=selection'/>
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


			<Navbar brand={this.state.logo} right className="grey darken-1 navbarHeight">
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






