import { ADD_BOOK, UPDATE_BOOK, TOGGLE_READ } from '../types/bookTypes';

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const updateBook = (book) => ({
  type: UPDATE_BOOK,
  payload: book,
});

export const toggleRead = (book) => ({
  type: TOGGLE_READ,
  payload: book,
});
