import React from "react";
import { connect } from "react-redux";
import { addBook } from "../redux/actions";

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookName: "",
      author: ""
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAddBook = () => {
    this.props.addBook(this.state.bookName);
    this.setState({
      bookName: "",
      author: ""
    });
  };
  render() {
    return (
      <div>
        <div class="form-group">
          <label for="bookName">Book Name</label>
          <input
            class="form-control"
            name="bookName"
            onChange={this.updateInput}
            value={this.state.bookName}
            placeholder="Enter Book name"
          />
          <small id="bookNameHelp" class="form-text text-muted">
            Make sure to use correct spelling
          </small>
        </div>
        <div class="form-group">
          <label for="author">Author</label>
          <input
            class="form-control"
            name="author"
            onChange={this.updateInput}
            value={this.state.author}
            placeholder="Enter Author"
          />
        </div>

        <button class="btn btn-primary" onClick={this.handleAddBook}>
          Add Book
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addBook }
)(AddBook);
// export default AddTodo;
