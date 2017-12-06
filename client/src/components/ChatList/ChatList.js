import React, { Component } from 'react';
import {Chip, Row} from 'react-materialize';
import * as firebase from 'firebase';

export default class ChatList extends Component {

	state = {
		user : firebase.auth().currentUser.displayName
	};


	makeList = () => {
		 let arr = this.props.messages.map((ele, i) => {
			//let newArr = ele.split(":");
			let user = ele.user;
			let msg = ele.msg;

			return(
				<div key={i} className={(this.state.user === user) ? "deep-orange-text text-accent-2" : ""}>
					<Row>
						<li className={(this.state.user === user) ? "left" : "right"}>
							<Chip >
							<img src='http://via.placeholder.com/350x150' alt='Contact Person' />
							{user}
							</Chip>
							 {msg}	 
					 	</li>
				 	</Row>
				 </div>
			);
		});

		 return arr;
	};


	render() {

		

		return (
			<div>
					{this.makeList()}
				
			</div>
		);
	}
}
