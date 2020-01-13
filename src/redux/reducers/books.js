import { ADD_BOOK } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK: {
      const { bookId, bookName } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, bookId],
        byIds: {
          ...state.byIds,
          [bookId]: {
            bookName: bookName
          }
        }
      };
    }
    default:
      return state;
  }
}
