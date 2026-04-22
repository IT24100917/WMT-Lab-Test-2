import React from "react";

export default function BookList({ books, onEdit, onDelete }) {
  if (books.length === 0) {
    return <p className="empty">No books yet. Add one above!</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book._id} className="book-card">
          <div className="book-info">
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <span className="genre-tag">{book.genre}</span>
            {/* ★ Shows the extra rating field */}
            <span className="rating">{"⭐".repeat(book.rating)}</span>
          </div>
          <div className="book-actions">
            <button onClick={() => onEdit(book)} className="edit-btn">Edit</button>
            <button onClick={() => onDelete(book._id)} className="delete-btn">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
