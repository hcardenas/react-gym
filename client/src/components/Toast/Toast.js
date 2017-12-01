import React, {Component} from 'react';
import './Toast.css';
import {ToastContainer, toast} from 'react-toastify';
import {css} from 'glamor';

export default class Toast extends Component {
	notify = ()=> {
		toast("Alert", {
			position: toast.POSITION.TOP_CENTER
		});

	}

	render() {
		return (
			<div>
				<button onClick={this.notify}>Notify!</button>
					<ToastContainer/>
			</div>
			);
	}
}