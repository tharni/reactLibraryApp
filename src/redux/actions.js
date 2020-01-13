import { ADD_BOOK } from "./actionTypes";

let nextBookId = 1;

export const addBook = bookName => ({
  type: ADD_BOOK,
  payload: {
    bookId: nextBookId++,
    bookName: bookName
  }
});
