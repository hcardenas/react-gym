import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Public from "./pages/Public";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Container} from "react-materialize";

const App = () =>
  <Router>
    <div>
      <Container>
        <Navbar />
        <br />
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/public" component={Public} />

          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Container>
    </div>
  </Router>;

export default App;