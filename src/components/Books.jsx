import React from 'react'
import './Books.css'
import {booksData} from '../data/book-data'
import Book from './utils/Book'

function Books() {

  return (
    <div className='Books'>
        {
            booksData.map((book,index) => {
                return <Book key={index} book={book} />
            })
        }
    </div>
  )
}

export default Books