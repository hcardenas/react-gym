import React, { Component } from 'react';
import './Footer.css';

export default class Foot extends Component {
	render() {
		return (
			<footer className="page-footer deep-orange accent-2">
	          <div className="container">
	            <div className="row">
	              <div className="col l6 s12">
	                <h5 className="white-text">Footer Content</h5>
	                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
	              </div>
	              <div className="col l4 offset-l2 s12">
	                <h5 className="white-text">About</h5>
	                <ul>
	                  <li><a className="grey-text text-lighten-3" href="#!">Helmut Cardenas</a></li>
	                  <li><a className="grey-text text-lighten-3" href="#!">Yvanna Harris</a></li>
	                  <li><a className="grey-text text-lighten-3" href="#!">Zac Saltzman</a></li>
	                </ul>
	              </div>
	            </div>
	          </div>
	          <div className="footer-copyright deep-orange">
	            <div className="container">
	            © 2014 Copyright Text
	            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
	            </div>
	          </div>
	        </footer>
		);
	}
}




