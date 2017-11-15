import React, {Component}from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Public from "./pages/Public";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Container} from "react-materialize";

import * as firebase from 'firebase';




export default class App extends Component {

  state = {
    userLoggedin : false
  };

  componentDidMount() {

    const auth = firebase.auth();

    auth.onAuthStateChanged( (user) => {
      let flag = false;
      if (user) 
        flag = true;

      this.setState({
          userLoggedin: flag
        });
      
    });
  };


  signOutUser = () => {
    firebase.auth().signOut();
    this.setState({
      userLoggedin: false
    });
  };

  render() {
    return (<div>
              <Router>      
                <Container>
                  <Navbar isUserlogged={this.state.userLoggedin} that={this} />
                  <br />
                  
                  { 
                    (this.state.userLoggedin === true)  ? 
                        (  
                          <div>
                            <Switch>
                              <Route exact path="/" component={Home} />
                              <Route exact path="/home" component={Home} />
                              <Route exact path="/public" component={Public} />
                              <Route component={NoMatch} />
                            </Switch>
                          </div>
                        ) 
                        :<div>
                          <Switch>
                            <Route component={LogIn} /> 
                          </Switch>
                        </div>         
                  }
                  
                  <Footer />
                </Container>
              </Router>
            </div>
    );
  }
}
