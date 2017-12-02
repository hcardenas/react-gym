import React, { Component } from 'react';
import { Row, Input} from 'react-materialize';
import * as firebase from 'firebase';
import {ToastContainer, toast} from 'react-toastify';
import {css} from 'glamor';



export default class LogUserIn extends Component {
	state = {
    email: "",
    password: ""
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  firebaseLogin = () => {
    console.log("loggin in user function");
    console.log(`email: ${this.state.email} password: ${this.state.password}`);

    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(this.state.email, this.state.password);
    promise.then(e => {
      //this.props.benchMarkCreated();
    });
  
    promise.catch(e => {
      console.log(e)
      return this.notify("Invalid Username/Password");
    });
  };

  notify = (message)=> {
    toast( message, {
      position: toast.POSITION.TOP_RIGHT
    });

  }

  render() {
    

    return (
      <div>
        <Row>
          <Input 
            type="email" 
            placeholder="JohnDoe@email.com" 
            label="Email" m={6} 
            onChange={this.handleInputChange} 
            name="email"
          />
          <Input 
            placeholder="xxxxxxxxx" 
            type="password"
            m={6} label="Password" 
            onChange={this.handleInputChange} 
            name="password"
          />

          <a 
            className="waves-effect waves-light btn" 
            onClick={this.firebaseLogin}>Log In</a>
        </Row>
        <Row>
          <ToastContainer
          type= 'error'
          hideProgressBar={false}
          autoClose={5000}
          />
        </Row>
      </div>
      );
   }
}




