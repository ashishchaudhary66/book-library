import React from "react";
import "./BookDetails.css";
import "./Book.css";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleRead } from "../../redux/slices/librarySlice";
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
        <span>Read</span>
        <span>
          <ToggleButtonGroup
            value={book.read ? "yes" : "no"}
            exclusive
            onChange={() => dispatch(toggleRead({ id: book.id }))}
            aria-label="Yes or No"
            size="small"
            style={{ padding: 0, height: 25 }}
          >
            <ToggleButton
              value="yes"
              aria-label="Yes"
              style={{
                backgroundColor: book.read ? "#007bff" : "",
                color: book.read ? "#fff" : "",
              }}
            >
              Yes
            </ToggleButton>

            <ToggleButton
              value="no"
              aria-label="No"
              style={{
                backgroundColor: !book.read ? "red" : "",
                color: !book.read ? "#fff" : "",
              }}
            >
              No
            </ToggleButton>
          </ToggleButtonGroup>
        </span>
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
