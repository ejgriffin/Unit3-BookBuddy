import { useState, useEffect } from "react";
import bookLogo from "./assets/books.png";
import Register from "./components/Register";
import Account from "./components/Account";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Books from "./components/Books";
import HomePage from "./components/HomePage";

const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

function App() {
  const [token, setToken] = useState(null);
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    try {
      const response = await fetch(`${API_URL}/books`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
      setBooks(result.books);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BrowserRouter>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Book Buddy
      </h1>
      <div>
        <Link to="/login">Login</Link>

        <Link to="/account">Account</Link>

        <Link to="/register">Register</Link>
      </div>

      <Routes>
        <Route
          path="/"
          element={<HomePage books={books} fetchBooks={fetchBooks} />}
        />

        <Route
          path="/login"
          element={<Login token={token} setToken={setToken} />}
        />
        <Route
          path="/register"
          element={<Register token={token} setToken={setToken} />}
        />
        <Route
          path="/account"
          element={
            <div>
              <Account token={token} setToken={setToken} />
              <HomePage books={books} fetchBooks={fetchBooks} />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
