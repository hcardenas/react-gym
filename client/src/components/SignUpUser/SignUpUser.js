import React, { Component } from 'react';
import { Row, Input} from 'react-materialize';
import * as firebase from 'firebase';
import API from '../../utils/API';
import {ToastSuccess, ToastDanger} from 'react-toastr-basic';
import validator from 'validator';
import './SignUpUser.css';


export default class SignUpUser extends Component {
	state = {
		email: "",
    username: "",
    password: ""
	};


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  firebaseLogin = () => {
    console.log("sign-up user function");
    console.log(`username: ${this.state.username} email: ${this.state.email} password: ${this.state.password}`);

    if (this.invalidUserSignIn()) {
      console.log(true);
      return;
    } 

    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(this.state.email, this.state.password);

    promise.then(e => {

      console.log('user created and logged in' + e);
      var FBid = e.uid;
        e.updateProfile({
          displayName: this.state.username
        }).then(() => {

          API.createUser({
            username: this.state.username,
            email: this.state.email,
            firebase_id: e.uid
          }).then(dbUser => {
            console.log("user created");
          });

          API.createBenchmark(
                {}, FBid)
              .then(dbBenchmark => 
                {console.log("benchmark created");
                //this.props.benchMarkCreated();
              })
        });


      });

    promise.catch(e => {
      ToastDanger(e.message);
    });
    

  };

  validateUserName = (username) => {
    let arr = [];

    if (username === "") 
      arr.push("user name can not be empty");
    if (username.length < 3)
      arr.push('username can not be less than 3 characters');
    if (username.length > 10)
      arr.push('username can not be greater than 10 characters');


    //console.log(`inside validateUserName ${arr}`);

    return arr;

  };

  validatePassword = (pass) => {
    var owasp = require('owasp-password-strength-test');
    var result = owasp.test(pass);

    if (result.errors.length === 0) 
      return [];
    else 
      return result.errors;

  };


  invalidUserSignIn = () => {
    let flag = false;
    const state = this.state;
    let errorArray = [];

    if (!validator.isEmail(state.email)) {
      console.log('email failed');
      errorArray.push('Invalid Email');
    }

    let userErrorArr = this.validateUserName(state.username);
    if (userErrorArr.length !== 0) {
      console.log('email failed');
      errorArray = errorArray.concat(userErrorArr);
    }

    let passwordErrorArray = this.validatePassword(state.password);
    if (passwordErrorArray.length !== 0) {
      console.log('email failed');
      errorArray = errorArray.concat(passwordErrorArray);
    }


    if (errorArray.length !== 0 ) {
      for (let index in errorArray) {
        console.log(errorArray[index]);
        ToastDanger(errorArray[index]);
      }

      flag = true;
    }

    return flag;

  };

  render() {
    

    return (
      <div>
        <Row>
          <Input 
            placeholder="John Doe" 
            s={12} label="User Name" 
            onChange={this.handleInputChange} 
            name="username"
          />
        </Row>
        <Row>
          <Input 
            type="email" 
            placeholder="JohnDoe@email.com" 
            label="Email" 
            s={6} 
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
          <a className="waves-effect waves-light btn deep-orange accent-2 margin38" onClick={this.firebaseLogin}>Sign Up</a>
        </Row>
      </div>
      );
   }
}




