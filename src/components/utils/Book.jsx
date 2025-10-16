import React from 'react'
import './Book.css'

function Book({book}) {
  return (
    <div className='Book'>
        <div>
            <span>Title: </span><span className='italic bold'>{book.title}</span>
        </div>
        <div>
            <span>Published: </span><span className='italic'>{book.published}</span>
        </div>
        <div>
            <span>Read: </span><span className='italic'>{book.read?"true":"false"}</span>
        </div>
        <div>
            <span><a className='italic'>edit</a></span>
        </div>
    </div>
  )
}

export default Book