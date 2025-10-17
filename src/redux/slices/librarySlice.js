import { createSlice } from '@reduxjs/toolkit'
import { booksData } from '../../data/book-data'

const initialState = {
  booksData
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    initializeBookData: (state, action) => {
        state.booksData = action.payload
    },
    addBook: (state, action) => {
      state.booksData.push(action.payload)
    },
    updateBook: (state, action) => {
      const id = action.payload.id
      state.booksData = state.booksData.map((book) => {
        if(book.id == id){
            return action.payload
        }
        return book;
      })
    },
    toggleRead: (state, action) => {
       state.booksData = state.booksData.map((book) => {
        if(book.id == action.payload.id){
            return {
                ...book,
                read : !book.read
            }
        }
        return book;
      })
    },
  },
})

export const { initializeBookData, addBook, updateBook,toggleRead } = booksSlice.actions

export default booksSlice.reducer