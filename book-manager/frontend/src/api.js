import axios from "axios";

// This reads from your .env file
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getBooks    = ()         => API.get("/books");
export const getBook     = (id)       => API.get(`/books/${id}`);
export const createBook  = (data)     => API.post("/books", data);
export const updateBook  = (id, data) => API.put(`/books/${id}`, data);
export const deleteBook  = (id)       => API.delete(`/books/${id}`);
