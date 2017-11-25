import React, { Component } from 'react';



export default class UserBio extends Component {
	state = {
		bio: ""
	};

	componentDidMount() {
		this.setState({
			bio: this.props.bio
		});

	}

	handleInputChange = event=> {
		let value = event.target.value

		this.setState({
			bio: value
		});
	}

	handleFormSubmit = event=> {
		event.preventDefault();

		this.setState({
			bio: ""
		});
	};

	render() {
		return (
			<div className="col m12">
		        <div className="card-panel grey lighten-5 z-depth-3">
		          <div className="row valign-wrapper">
		            <div className="col m5">
		              <img src={this.props.pic} alt="" className="circle responsive-img" /> 

		            </div>
		            <form className="col m7">
		            	<div classname="row">
		            		<div className="input-field col s12">
		            			<textarea 
		            			id="textarea1" 
		            			className="materialize-textarea">
		            			<input
		            			value={this.state.bio}
		            			name="bio"
		            			onChange={this.handleInputChange}
		            			palceholder="Fill in your bio!"
		            			type="text"/>
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




