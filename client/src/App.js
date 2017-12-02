import React, {Component}from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Public from "./pages/Public";
import EditPage from "./pages/EditPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Container} from "react-materialize";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
    return (<div>
              <Router>     
                <MuiThemeProvider >
                <Container>
                  <Navbar isUserlogged={this.state.userLoggedin} signOutUser={this.signOutUser} user={this.state.user} />
                  <br />
                  
                  { 
                    (this.state.userLoggedin === true && this.state.benchMarkCreated === true)  ? 
                        (  
                          <div>
                            <Switch>
                              <Route exact path="/" component={Home} />
                              <Route exact path="/home" component={Home} />
                              <Route exact path="/public" component={Public} />
                              <Route exact path="/edit" component={EditPage}/>
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
                  
                  <Footer />
                </Container>
                </MuiThemeProvider>
              </Router>
            </div>
    );
  }
}
