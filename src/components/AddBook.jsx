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
      if (id < bookId) id = bookId;
    }
    return (id + 1).toString();
  };

  const [formData, setFormData] = useState({
    id: getMaxId(),
    title: "",
    author: "",
    description: "",
    published: "",
    image: "",
    rating: 0,
    read: false,
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseFloat(value) : value,
    }));
  };

  const handleRadioChange = (value) => {
    setFormData((prev) => ({ ...prev, read: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.author.trim()) newErrors.author = "Author is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.published) newErrors.published = "Published date is required";
    if (!formData.image.trim()) newErrors.image = "Image URL is required";
    if (formData.rating < 0 || formData.rating > 5)
      newErrors.rating = "Rating must be between 0 and 5";

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
      published: "",
      image: "",
      rating: 0,
      read: false,
    });
    setSubmitting(false);
  };

  return (
    <div className="AddBook">
      <form onSubmit={handleSubmit}>
        <h2>Add Book</h2>

        <div className="form-group">
          <label>Title</label>
          <input name="title" type="text" value={formData.title} onChange={handleChange} disabled={submitting}/>
          {errors.title && <p className="error">{errors.title}</p>}
        </div>

        <div className="form-group">
          <label>Author</label>
          <input name="author" type="text" value={formData.author} onChange={handleChange} disabled={submitting}/>
          {errors.author && <p className="error">{errors.author}</p>}
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} disabled={submitting}/>
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div className="form-group">
          <label>Published</label>
          <input name="published" type="date" value={formData.published} onChange={handleChange} disabled={submitting}/>
          {errors.published && <p className="error">{errors.published}</p>}
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input name="image" type="text" value={formData.image} onChange={handleChange} disabled={submitting}/>
          {errors.image && <p className="error">{errors.image}</p>}
          {formData.image && <img className="preview-image" src={formData.image} alt="Book Preview"/>}
        </div>

        <div className="form-group">
          <label>Rating (0-5)</label>
          <input name="rating" type="number" min="0" max="5" step="0.1" value={formData.rating} onChange={handleChange} disabled={submitting}/>
          {errors.rating && <p className="error">{errors.rating}</p>}
        </div>

        <div className="form-group">
          <label>Read</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="read" checked={formData.read === true} onChange={() => handleRadioChange(true)} disabled={submitting}/> Yes
            </label>
            <label>
              <input type="radio" name="read" checked={formData.read === false} onChange={() => handleRadioChange(false)} disabled={submitting}/> No
            </label>
          </div>
        </div>

        <button type="submit" disabled={submitting}>{submitting ? "Adding..." : "Add Book"}</button>
      </form>
    </div>
  );
}

export default AddBook;
