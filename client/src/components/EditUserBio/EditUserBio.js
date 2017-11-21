import React, { Component } from 'react';
import {Row} from 'react-materialize';
const ContentEditable = require('react-wysiwyg');


export default class EditUserBio extends Component {
	State = {
		editing: false,
		section: "",
		input: ""
	};

	onCLick = ()=> {
		if (this.state.editing) {
			return(<div className="input-field"><textarea id="textarea1" className="materialize-textarea"></textarea></div>);
		}

		this.setState({
			editing: true
		});
	}

	handleInputChange = event => {
		let value = event.target.value;
		const name = event.target.name;

		this.setState({
			[name]:value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();

		this.setState({
			editing: false,
			section: "",
			input: ""
		});
	}


	render() {
		return (
				<Row>
					<div className="col s1 offset-11">
						<div className="fixed-action-btn">
							<a className="btn-floating btn-large red">
								<i className="large material-icons">mode_edit</i>
							</a>
							<ul>
							    <li>
							    	<a className="btn-floating red">
							    		<i className="material-icons">account_circle</i>
							    	</a>
							    </li>
      							<li>
      								<a className="btn-floating yellow darken-1">
      									<i className="material-icons">assessment</i>
      								</a>
      							</li>
      							<li>
      								<a className="btn-floating green">
      									<i className="material-icons">videocam</i>
      								</a>
      							</li>
							</ul>
						</div>
					</div>
				</Row>
			)
	}
}




