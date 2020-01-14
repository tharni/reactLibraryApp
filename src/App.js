import React from "react";
import "./styles.css";
import BookMgmt from "./BookMgmt";

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
      <div class="container">
        <h1>Welcome to Ezhil Library</h1>
        <button id="manageBooks" onClick={this.handleToggle}>
          Manage Books
        </button>
        <div>{this.state.toggle ? <BookMgmt /> : ""}</div>
      </div>
    );
  }
}
