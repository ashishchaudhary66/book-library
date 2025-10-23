import React from 'react';
import './Book.css';
import { useNavigate } from 'react-router-dom';

function Book({ book }) {
  const navigate = useNavigate();

  const truncate = (text, maxLength) =>
    text.length > maxLength ? text.substring(0, maxLength - 3) + '...' : text;

  return (
    <div
      className={`book-card ${book.read ? 'read' : 'unread'}`}
      onClick={() => navigate(`/books/details/${book.id}`)}
    >
      <div className="book-image-wrapper">
        <img className="book-image" src={book.image} alt="Image Not Available" />
      </div>
      <div className="book-info">
        <h3 className="book-title">{truncate(book.title, 25)}</h3>
        <p className="book-author">{truncate(book.author, 25)}</p>
        <p className="book-rating">{"⭐".repeat(Math.floor(book.rating))} {book.rating.toFixed(1)}</p>
      </div>
    </div>
  );
}

export default Book;
