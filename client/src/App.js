import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Public from "./pages/Public";
import {Container} from "react-materialize";

const App = () =>
  <Router>
    <div>
      <Container>
        
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/public" component={Public} />

          <Route component={NoMatch} />
        </Switch>
      </Container>
    </div>
  </Router>;

export default App;