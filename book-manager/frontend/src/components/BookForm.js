import React, { useState, useEffect } from "react";

const EMPTY = { title: "", author: "", genre: "", price: "",  rating: 3 };

export default function BookForm({ onSubmit, editingBook, onCancel }) {
  const [form, setForm] = useState(EMPTY);

  // If a book is passed in for editing, pre-fill the form
  useEffect(() => {
    if (editingBook) setForm(editingBook);
    else setForm(EMPTY);
  }, [editingBook]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm(EMPTY);
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <h2>{editingBook ? "Edit Book" : "Add New Book"}</h2>

      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <input
        name="author"
        placeholder="Author"
        value={form.author}
        onChange={handleChange}
        required
      />
      <input
        name="genre"
        placeholder="Genre"
        value={form.genre}
        onChange={handleChange}
        required
      />
      <input
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        required
      />
      <input
        name="rating"
        type="number"
        placeholder="Rating (1-5)"
        min="1"
        max="5"
        value={form.rating}
        onChange={handleChange}
        required
      />

      <div className="form-buttons">
        <button type="submit">{editingBook ? "Update" : "Add Book"}</button>
        {editingBook && (
          <button type="button" onClick={onCancel} className="cancel-btn">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
