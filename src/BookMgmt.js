import React from "react";
import AddBook from "./components/AddBook";
import BookList from "./components/bookList";

export default function BookMgmt() {
  return (
    <div>
      <div>&nbsp;</div>
      <div>
        {" "}
        <AddBook />
      </div>
      <div>
        {" "}
        <BookList />
      </div>
    </div>
  );
}
