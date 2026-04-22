import React, { useState, useEffect } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import { getBooks, createBook, updateBook, deleteBook } from "./api";
import "./App.css";

export default function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [error, setError] = useState("");

  // Load books on mount
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await getBooks();
      if (!Array.isArray(res.data)) {
        throw new Error("Invalid response from server. Check API URL.");
      }
      setBooks(res.data);
    } catch (err) {
      setError("Could not load books. Is the backend running?");
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (editingBook) {
        await updateBook(editingBook._id, formData);
        setEditingBook(null);
      } else {
        await createBook(formData);
      }
      fetchBooks();
    } catch (err) {
      setError("Failed to save book.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this book?")) return;
    try {
      await deleteBook(id);
      fetchBooks();
    } catch (err) {
      setError("Failed to delete book.");
    }
  };

  return (
    <div className="app">
      <header>
        <h1>📚 Book Manager</h1>
        <p>A MERN Stack Practice Project</p>
      </header>

      <main>
        {error && <div className="error-banner">{error}</div>}

        <BookForm
          onSubmit={handleSubmit}
          editingBook={editingBook}
          onCancel={() => setEditingBook(null)}
        />

        <BookList
          books={books}
          onEdit={setEditingBook}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
}
