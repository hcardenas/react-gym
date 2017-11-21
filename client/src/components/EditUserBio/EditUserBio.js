import React, { Component } from 'react';
const ContentEditable = require('react-wysiwyg');



export default class UserBio extends Component {

	state: {
		text: '',
		editing: false,
		html: 'default text'
	}

	onChange = (textContent, setPlaceholder)=> {
		if(setPlaceholder) {
			this.setState({
				placeholder: true,
				html: ''
			})
		} else {
			this.setState({
				placeholder: false,
				html: textContent
			})
		}
	}

	enableEditing = ()=> {
		this.setState({ editing: true });
	}



	render() {
		return (
			<div className="col m12">
		        <div className="card-panel grey lighten-5 z-depth-3">
		          <div className="row valign-wrapper">
		            <div className="col m5">
		              <img src={this.props.pic} alt="" className="circle responsive-img" /> 

		            </div>
		            <div className="col m7" onClick={this.enableEditing}>
		              <span className="black-text">
		              <ContentEditable
		              	tagName= 'span'
		              	onChange={this.onChange}
		              	html={this.state.html}
		              	preventStyling
		              	noLineBreaks
		              	placeholder={this.state.placeholder}
		              	placeholderText={this.props.bio}
		              	editing={this.state.editing}
		              	/>
		              </span>
		            </div>
		          </div>
		        </div>
		    </div>
		);
	}
}




