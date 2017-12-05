import React, { Component } from 'react';
import { Row, Input} from 'react-materialize';
import * as firebase from 'firebase';
import API from '../../utils/API';


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
    


    promise.catch(e => {console.log(e.message)});

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
          <a className="waves-effect waves-light btn deep-orange accent-2" onClick={this.firebaseLogin}>Sign Up</a>
        </Row>
      </div>
      );
   }
}




