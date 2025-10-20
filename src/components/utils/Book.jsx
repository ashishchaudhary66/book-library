import React from 'react'
import './Book.css'
import { useNavigate } from 'react-router-dom'

function Book({book}) {
    const navigate = useNavigate();
    const title = book.title
    const published = book.published
    const author = book.author

  return (
    <div className={`Book ${book.read ? "read" : "unread"}`} onClick={() => navigate(`/books/details/${book.id}`)}>
        <div>
            <span>Title: </span><span >{title.length<18?title:title.substring(0,14)+'...'}</span>
        </div>
        <div>
            <span>Published: </span><span >{published.length<18?published:published.substring(0,14)+'...'}</span>
        </div>
        <div>
            <span>Author: </span><span >{author.length<18?author:author.substring(0,14)+'...'}</span>
        </div>
    </div>
  )
}

export default Book