import React, {Component} from 'react';
import './Toast.css';
import {ToastContainer, toast} from 'react-toastify';
import {css} from 'glamor';

export default class Toast extends Component {

	notify = (message)=> {
		toast( message, {
			position: toast.POSITION.TOP_CENTER
		});

	}

	render() {
		return (
			<div>
					<ToastContainer
					type= 'error'
					hideProgressBar={false}
					autoClose={5000}
					/>
			</div>
			);
	}
}