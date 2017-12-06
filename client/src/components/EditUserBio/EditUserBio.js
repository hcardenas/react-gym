import React, { Component } from 'react';
import API from '../../utils/API';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import {ToastSuccess,ToastDanger} from 'react-toastr-basic';

const CLOUDINARY_UPLOAD_PRESET = 'yvvgfjfq';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/react-gym/image/upload';


export default class UserBio extends Component {
	constructor(props) {
		super(props);

		this.state = {
			bio : "",
			uploadedFile: null,
			uploadedFileCloudinaryUrl: ''

		};
	}

	onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
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
			ToastSuccess('Bio Updated');
		}).catch(e => {
			ToastDanger(e.message);
		})
	};

	handleImageSubmit = event=> {
		event.preventDefault();
		API.updateUser({
			profile_pic: this.state.uploadedFileCloudinaryUrl
		}, this.props.id).then(dbUser => {
			console.log("Pic Updated");
			ToastSuccess('Picture Updated');
		}).catch(e => {
			ToastDanger(e.message);
		})
	};

	render() {

		console.log("ON RENDER BIO = " + this.props.bio);
		return (
			<div className="col m12">
		        <div className="card-panel grey lighten-5 z-depth-3 border">
		          <div className="row valign-wrapper">
		            <div className="col m5">
		            	<div className="FileUpload">
		            		<Dropzone className="zone-style"
		            			onDrop={this.onImageDrop.bind(this)}
		            			multiple={false}
		            			accept="image/*">
		            			<div>Drop an image or click to select a file to upload</div>
		            		</Dropzone>
		            	</div>

		            	<div>
          					{this.state.uploadedFileCloudinaryUrl === '' ? null :
          					<div>
            					<p>{this.state.uploadedFile.name}</p>
            					<img src={this.state.uploadedFileCloudinaryUrl} className="circle responsive-img"/>
          					</div>}
        				</div>
        				<br />
        				<a onClick={this.handleImageSubmit} className="waves-effect waves-light btn deep-orange accent-2">
			            				Save
			            			</a>

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
			            			<a onClick={this.handleFormSubmit} className="waves-effect waves-light btn deep-orange accent-2">
			            				Save
			            			</a>
		            		</div>
		            	</div>

		            </form>
		          </div>
		        </div>
		    </div>
		);
	}
}




