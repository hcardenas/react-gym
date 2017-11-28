import React, { Component } from 'react';
import API from '../../utils/API';


export default class UserBio extends Component {
	constructor(props) {
		super(props);

		this.state = {
			bio : ""
		}
	}

	componentDidMount() {
		// this.setState({
		// 	bio: this.bioSetState()
		// });
	}

	bioSetState = () => {
		let newBio = this.props.bio;
		return newBio;
	}

	handleInputChange = event=> {
		let value = event.target.value

		this.setState({
			bio: value
		});
	}

	handleFormSubmit = event=> {
		event.preventDefault();
		API.updateUser({
			bio: this.state.bio
		}, this.props.id).then(dbUser => {
			console.log("Bio Updated");
		})
	};

	render() {

		console.log("ON RENDER BIO = " + this.props.bio);
		return (
			<div className="col m12">
		        <div className="card-panel grey lighten-5 z-depth-3">
		          <div className="row valign-wrapper">
		            <div className="col m5">
		              <img src={this.props.pic} alt="" className="circle responsive-img" /> 

		            </div>
		            <form className="col m7">
		            	<div className="row">
		            		<div className="input-field col s12">
		            			<textarea 
		            			id="textarea1" 
		            			className="materialize-textarea"
		            			value={this.state.bio}
		            			name="bio"
		            			onChange={this.handleInputChange}
		            			placeholder={this.props.bio}
		            			>
		            			</textarea>
		            		</div>
		            	</div>

		            </form>
		          </div>
		        </div>
		    </div>
		);
	}
}




