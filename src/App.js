import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PageDog from "./components/PageDog/PageDog";
import Page from "./components/PageDog/Page";
import ListDog from "./components/ListDog/ListDog";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/page/" component={Page} />
            <Route path="/page/:handle" component={PageDog} />
            <Route exact path="/" component={ListDog} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
