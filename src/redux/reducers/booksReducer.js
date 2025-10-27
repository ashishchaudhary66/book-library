import { ADD_BOOK, UPDATE_BOOK, TOGGLE_READ } from '../types/bookTypes';
import { booksData } from '../../data/book-data';

const initialState = {
  booksData,
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        booksData: [...state.booksData, action.payload],
      };

    case UPDATE_BOOK:
      return {
        ...state,
        booksData: state.booksData.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      };

    case TOGGLE_READ:
      return {
        ...state,
        booksData: state.booksData.map((book) =>
          book.id === action.payload.id ? { ...book, read: !book.read } : book
        ),
      };

    default:
      return state;
  }
};
