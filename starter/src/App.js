import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./Search.js";
import Library from "./Library.js";
import { update, getAll } from "./BooksAPI.js";

function App() {
  const [updated, setUpdated] = useState([]);
  const [myBooks, setMyBooks] = useState([]);

  // api call for updating the backend
  const updateBackend = (book, newShelf) => {
    const myUpdate = async () => {
      const updated = await update(book, newShelf);
      setUpdated(updated);
      // to trigger a rerender
      // for library to update UI
    };
    myUpdate();
  };

  // api call for getting all books from the backend
  useEffect(() => {
    const getAllBooks = async () => {
      const response = await getAll();
      setMyBooks(response);
    };
    getAllBooks();
  }, [updated]);

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={<Library update={updateBackend} books={myBooks} />}
        />
        <Route
          path="/search"
          element={<Search update={updateBackend} backendBooks={myBooks} />}
        />
      </Routes>
    </div>
  );
}

export default App;
