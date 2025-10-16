import React from 'react'
import './BookDetails.css'
import './Book.css'
import { useParams } from 'react-router-dom'

function BookDetails({booksData}) {
    const { id } = useParams()
    const book = booksData.find((b) => b.id === id)

    if (!book) {
    return <div className="BookDetails">Book not found!</div>
  }
  return (
    <div className='BookDetails'>
        <div>
            <span>Title: </span><span className='italic bold'>{book.title}</span>
        </div>
        <div>
            <span>Author: </span><span className='italic'>{book.author}</span>
        </div>
        <div>
            <span>Description: </span><span className='italic'>{book.description}</span>
        </div>
        <div>
            <span>Published: </span><span className='italic'>{book.published}</span>
        </div>
        <div>
            <span>Read: </span><span className='italic'>{book.read?"true":"false"}</span>
        </div>
        <div>
            <span><a className='italic' href="#">edit</a></span>
        </div>
    </div>
  )
}

export default BookDetails