import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NoMatch } from "./pages/NoMatch";
import { NavigationBar } from "./components/NavigationBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
