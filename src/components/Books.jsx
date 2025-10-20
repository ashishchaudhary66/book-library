import React from 'react'
import './Books.css'
import Book from './utils/Book'

function Books({booksData}) {   
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