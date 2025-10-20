import React from 'react'
import './Container.css'
import Books from './Books'
import BookDetails from './utils/BookDetails'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AddBook from './AddBook'
import Update from './Update'

function Container() {
    const booksData = useSelector((state) => state.books.booksData);
    const readBooks = booksData.filter((book) => book.read)
    const unreadBooks = booksData.filter((book) => !book.read)
  return (
    <div className='Container'>
        <Routes>
            <Route path="/" element={<Books booksData={booksData} />} />
            <Route path="/all" element={<Books booksData={booksData} />} />
            <Route path="/read" element={<Books booksData={readBooks} />} />
            <Route path="/unread" element={<Books booksData={unreadBooks} />} />
            <Route path="/books/details/:id" element={<BookDetails />} />
            <Route path="/AddBook" element={<AddBook />} />
            <Route path="/UpdateBook/:id" element={<Update />} />
        </Routes>
    </div>
  )
}

export default Container