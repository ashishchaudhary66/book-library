import React, { useState } from "react";
import "./AddBook.css";
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "../redux/slices/librarySlice";

function AddBook() {
  const booksData = useSelector((state) => state.books.booksData);
  const dispatch = useDispatch();

  const getMaxId = () => {
    let id = 0;
    for (let book of booksData) {
      const bookId = parseInt(book.id, 10);
      if (id < bookId) {
        id = bookId;
      }
    }
    return (id + 1).toString();
  };

  const [formData, setFormData] = useState({
    id: getMaxId(),
    title: "",
    author: "",
    description: "",
    read: false,
    published: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      read: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.author.trim()) newErrors.author = "Author is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.published) newErrors.published = "Published date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);

    dispatch(addBook(formData));
    alert("Book added successfully!");
    setFormData({
      id: getMaxId(),
      title: "",
      author: "",
      description: "",
      read: false,
      published: "",
    });
    setSubmitting(false);
  };

  return (
    <div className="AddBook">
      <form onSubmit={handleSubmit}>
        <h4>Add Book</h4>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            disabled={submitting}
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="author">Author</label>
          <input
            name="author"
            type="text"
            value={formData.author}
            onChange={handleChange}
            disabled={submitting}
          />
          {errors.author && <p className="error">{errors.author}</p>}
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input
            name="description"
            type="text"
            value={formData.description}
            onChange={handleChange}
            disabled={submitting}
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div>
          <label htmlFor="published">Published</label>
          <input
            name="published"
            type="date"
            value={formData.published}
            onChange={handleChange}
            disabled={submitting}
          />
          {errors.published && <p className="error">{errors.published}</p>}
        </div>

        <div>
          <label>Read</label>
          <label>
            <input
              type="radio"
              name="read"
              checked={formData.read === true}
              onChange={() => handleRadioChange(true)}
              disabled={submitting}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="read"
              checked={formData.read === false}
              onChange={() => handleRadioChange(false)}
              disabled={submitting}
            />
            No
          </label>
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? "Adding..." : "Add Book"}
        </button>
      </form>
    </div>
  );
}

export default AddBook;
