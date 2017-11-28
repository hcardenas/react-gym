import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET= 'yvvgfjfq'

const CLOUDINARY_UPLOAD_URL= 'https://api.cloudinary.com/v1_1/react-cloudinary/upload'

export default class EditUserBio extends Component {
	constructor(props) {
		super(props);

		this.state = {
			bio: '',
			uploadedFileCloudinaryUrl:'',
			uploadedFile: ''
		};
	}

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

	onImageDrop(files) {
		this.setState({
			uploadedFileCloudinaryUrl: files[0]
		});

		this.handleImageUpload(files[0]);
	}

	handleImageUpload(file) {
		let upload = request.post(CLOUDINARY_UPLOAD_URL)
			.field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
			.field('file', file);

		upload.end((err, response)=> {
			if(err) {
				console.error(err);
			}

			if(response.body.secure_url !== '') {
				this.setState({
					uploadedFileCloudinaryUrl: response.body.secure_url
				});
			}
		});
	}



	render() {
		return (
			<div className="col m12">
		        <div className="card-panel grey lighten-5 z-depth-3">
		          <div className="row valign-wrapper">
		            <div className="col m5">
		            	<div className="FileUpload">
		              		<Dropzone
		              		multiple={false}
		              		accept="image/*"
		              		onDrop={this.onImageDrop.bind(this)}
		              		className="circle responsive-img">
		              		<p>Drop an image or click to select a file to upload.</p>
		              		</Dropzone>
		              	</div>
		              	<div>
		              		{this.state.uploadedFileCloudinaryUrl === '' ? null :
		              		<div>
		              			<p>{this.state.uploadedFile.name}</p>
		              			<img src={this.state.uploadedFileCloudinaryUrl} className="circle responsive-img" />
		              		</div>}
		              	</div>

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




