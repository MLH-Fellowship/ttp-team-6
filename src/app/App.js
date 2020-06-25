import React, { Component } from "react";
import RoutesContainer from "../components/routes/RoutesContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <RoutesContainer />
        </header>
      </div>
    );
  }
}

export default App;
