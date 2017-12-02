import React, { Component } from 'react';
import {Tabs, Tab} from 'react-materialize';
import LogUserIn from '../LogUserIn';
import SignUpUser from '../SignUpUser';


export default class CollHeader extends Component {
	render() {
		return (
			<div>
				

		        <Tabs className='tab-demo z-depth-1 center-align'>
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
