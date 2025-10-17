import React from 'react'
import './Book.css'
import { useNavigate } from 'react-router-dom'

function Book({book}) {
    const navigate = useNavigate();
  return (
    <div className='Book' onClick={() => navigate(`/books/details/${book.id}`)}>
        <div>
            <span>Title: </span><span className='italic bold'>{book.title}</span>
        </div>
        <div>
            <span>Published: </span><span className='italic'>{book.published}</span>
        </div>
        <div>
            <span>Read: </span><span className='italic'>{book.read?"true":"false"}</span>
        </div>
    </div>
  )
}

export default Book