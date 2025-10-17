import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './slices/librarySlice'

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
})