import React, { Component } from 'react';
import {Row} from 'react-materialize';
import CollHeader from '../../components/CollHeader';

import './LogIn.css';

export default class LogIn extends Component {


	render() {
		return (
			<div className="logContainer">	
				<Row>
					<div className="col m8 offset-m2 text-center z-depth-2">
						<br />
						<CollHeader/>
						
      				</div>
				</Row>
				
			</div>
		);
	}
}

