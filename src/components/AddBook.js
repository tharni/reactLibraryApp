import React from "react";
import { connect } from "react-redux";
import { addBook } from "../redux/actions";

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddBook = () => {
    this.props.addBook(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <form>
        <div class="form-group">
          <label for="bookName">Book Name</label>
          <input class="form-control" id="bookName" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

      <div>
        <div>
          <label>Book Name:</label>
          <input
            onChange={e => this.updateInput(e.target.value)}
            value={this.state.input}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            onChange={e => this.updateInput(e.target.value)}
            value={this.state.input}
          />
        </div>
        <div className="spacer" />
        <div>
          <button className="add-todo" onClick={this.handleAddBook}>
            Add book
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addBook }
)(AddBook);
// export default AddTodo;
