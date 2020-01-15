import React from "react";
import "./styles.css";
import BookMgmt from "./BookMgmt";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import Books from "./components/bookList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  handleToggle = () => {
    const currToggle = this.state.toggle === false ? true : true;
    this.setState({
      toggle: currToggle
    });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <h1>Welcome to Ezhil Library</h1>
          <button id="manageBooks" onClick={this.handleToggle}>
            Manage Books
          </button>
          <div>{this.state.toggle ? <BookMgmt /> : ""}</div>

          <Switch>
            <Route exact path="/create" component={AddBook} />
            <Route exact path="/edit/:bookId" component={EditBook} />
            <Route exact path="/all" component={Books} />
          </Switch>
        </div>
      </Router>
    );
  }
}
