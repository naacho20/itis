import React, { Component } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import NavigationBar from "./components/NavigationBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Home id="Home" />
        <About id="About" />
        <Contact id="Contact" />
      </React.Fragment>
    );
  }
}

export default App;
