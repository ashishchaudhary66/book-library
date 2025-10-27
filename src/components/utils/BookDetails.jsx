import React from "react";
import "./BookDetails.css";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleRead } from "../../redux/actions/bookActions";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function BookDetails() {
  const dispatch = useDispatch();
  const booksData = useSelector((state) => state.books.booksData);
  const { id } = useParams();
  const book = booksData.find((b) => b.id === id);
  if (!book) {
    return <div className="BookDetails">Book not found!</div>;
  }

  return (
    <div className="book-details-container">
      <img className="details-image" src={book.image} alt={book.title} />
      <div className="details-info">
        <h2>{book.title}</h2>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Published:</strong> {book.published}</p>
        <p><strong>Rating:</strong> {"⭐".repeat(Math.floor(book.rating))} {book.rating.toFixed(1)}</p>
        <p><strong>Description:</strong> {book.description}</p>
        <div className="read-toggle">
          <strong>Read:</strong>
          <ToggleButtonGroup
            value={book.read ? "yes" : "no"}
            exclusive
            onChange={() => dispatch(toggleRead({ id: book.id }))}
            size="small"
            style={{ marginLeft: "10px" }}
          >
            <ToggleButton
              value="yes"
              style={{
                backgroundColor: book.read ? "#007bff" : "",
                color: book.read ? "#fff" : "",
              }}
            >
              Yes
            </ToggleButton>
            <ToggleButton
              value="no"
              style={{
                backgroundColor: !book.read ? "red" : "",
                color: !book.read ? "#fff" : "",
              }}
            >
              No
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <NavLink className="edit-link" to={`/UpdateBook/${book.id}`}>
          Edit Book
        </NavLink>
      </div>
    </div>
  );
}

export default BookDetails;
