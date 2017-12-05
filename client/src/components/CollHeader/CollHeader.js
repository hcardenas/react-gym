import React, { Component } from 'react';
import {Tabs, Tab} from 'react-materialize';
import LogUserIn from '../LogUserIn';
import SignUpUser from '../SignUpUser';
import './CollHeader.css';


export default class CollHeader extends Component {
	render() {
		return (
			<div>
				

		        <Tabs className='tab z-depth-1 center-align deep-orange accent-2'>
						<Tab title="Log In" active>
							<br />
							<LogUserIn benchMarkCreated={this.props.benchMarkCreated} />
						</Tab>
						<Tab title="Sign Up">
							<br />
							<SignUpUser benchMarkCreated={this.props.benchMarkCreated}/>
						</Tab>
						
				</Tabs>
			</div>
		);
	}
}
