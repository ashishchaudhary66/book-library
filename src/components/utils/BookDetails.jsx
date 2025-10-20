import React from "react";
import "./BookDetails.css";
import "./Book.css";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleRead } from "../../redux/slices/librarySlice";

function BookDetails() {
  const booksData = useSelector((state) => state.books.booksData);
  const dispatch = useDispatch();
  const { id } = useParams();
  const book = booksData.find((b) => b.id === id);
  if (!book) {
    return <div className="BookDetails">Book not found!</div>;
  }
  return (
    <div className="BookDetails">
      <div>
        <span>Title </span>
        <span>{book.title}</span>
      </div>
      <div>
        <span>Author </span>
        <span>{book.author}</span>
      </div>
      <div>
        <span>Description </span>
        <span>{book.description}</span>
      </div>
      <div>
        <span>Published </span>
        <span>{book.published}</span>
      </div>
      <div>
        <span>Read </span>
        <span>{book.read ? "true" : "false"}</span>
      </div>
      <div>
        <span>
          <NavLink to={`/UpdateBook/${book.id}`}>Edit</NavLink>
        </span>
      </div>
    </div>
  );
}

export default BookDetails;
