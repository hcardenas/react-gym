import React, {Component} from 'react';
import './Toast.css';
import {ToastContainer, toast} from 'react-toastify';
import {css} from 'glamor';

export default class Toast extends Component {
	state = {
		alert_message: ""
	}

	componentDidMount() {
		this.setState({
			alert_message: ""
		});
	}



	notify = ()=> {
		toast( this.state.alert_message, {
			position: toast.POSITION.TOP_CENTER
		});

	}

	render() {
		return (
			<div>
				{this.notify}
					<ToastContainer
					type= 'error'
					hideProgressBar={true}
					autoClose={5000}
					/>
			</div>
			);
	}
}