import React, { useState } from "react";
import "./Update.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateBook } from "../redux/slices/librarySlice";

function Update() {
  const booksData = useSelector((state) => state.books.booksData)
  const { id } = useParams()
  const book = booksData.find((b) => b.id === id)
  const [formData, setFormData] = useState(book);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();

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
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.author.trim()) newErrors.author = 'Author is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.published) newErrors.published = 'Published date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);

    // Simulate async submission (e.g., API call)
    setTimeout(() => {
      dispatch(updateBook(formData));
      alert('Book updated successfully!');
      setSubmitting(false);
    }, 1000);
  };
      
  return (
    <div className="Update">
      <h4>Update Book</h4>
      <form onSubmit={handleSubmit}>
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
          {submitting ? 'Updating...' : 'Update Book'}
        </button>
      </form>
    </div>
  );
}

export default Update;
