import React, {Component}from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Public from "./pages/Public";
import EditPage from "./pages/EditPage";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Container} from "react-materialize";
import Background from './background.jpg';

import ToastrContainer from 'react-toastr-basic'

import * as firebase from 'firebase';




export default class App extends Component {
  
  state = {
    userLoggedin : false,
    benchMarkCreated: false,
    user: {}
  };

  componentDidMount = () => {

    const auth = firebase.auth();

    auth.onAuthStateChanged( (user) => {
      let flag = false;
      if (user) 
        flag = true;

      this.setState({
          userLoggedin: flag,
          user: user
        });
    });

  };

  benchMarkCreated = () => {
    this.setState({
      benchMarkCreated: true
    });
  };


  signOutUser = () => {
    firebase.auth().signOut();
    this.setState({
      userLoggedin: false
    });
  };



  

  render() {
    return (
            <div>
              <Router>     
                  <div>
                  <Navbar isUserlogged={this.state.userLoggedin} signOutUser={this.signOutUser} user={this.state.user} />
                <Container>

                  <br />
                  
                  { 
                    (this.state.userLoggedin === true)  ? 
                        (  
                          <div>
                            <Switch>
                              <Route exact path="/" component={Public} />
                              <Route exact path="/home" component={Home} />
                              <Route exact path="/public" component={Public} />
                              <Route exact path="/edit" component={EditPage}/>
                              <Route exact path="/profile/:user" component={Profile}/>
                              <Route component={NoMatch} />
                            </Switch>
                          </div>
                        ) 
                        :<div>
                          <Switch>
                            <Route render={()=> <LogIn benchMarkCreated={this.benchMarkCreated} />}  /> 
                          </Switch>
                        </div>         
                  }
                  

                </Container>
                  <Footer />
                </div>

              </Router>

              <ToastrContainer />
            </div>
    );
  }
}
