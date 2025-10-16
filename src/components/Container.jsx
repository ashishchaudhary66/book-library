import React from 'react'
import './Container.css'
import Books from './Books'
import {booksData} from '../data/book-data'
import BookDetails from './utils/BookDetails'
import { Route, Routes } from 'react-router-dom'

function Container() {
  return (
    <div className='Container'>
        <div>Container</div>
        <Routes>
            <Route path="/" element={<Books booksData={booksData} />} />
            <Route path="/books/details/:id" element={<BookDetails booksData={booksData}/>} />
        </Routes>
    </div>
  )
}

export default Container