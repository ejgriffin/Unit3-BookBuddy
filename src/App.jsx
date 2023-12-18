import { useState, useEffect } from "react";
import bookLogo from "./assets/books.png";
import Register from "./components/Register";
import Account from "./components/Account";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import HomePage from "./components/HomePage";
import SingleBook from "./components/SingleBook";
import { getUser } from "./API";
import Navigations from "./components/Navigations";

const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

function App() {
  const [token, setToken] = useState(null);
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken !== undefined) setToken(localToken);
  }, []);

  useEffect(() => {
    if (token !== null && token !== undefined) {
      console.log(token);
      async function fetchUser(token) {
        try {
          const nextUser = await getUser(token);

          setUser(nextUser);
        } catch (err) {
          console.log(err);
        }
      }

      fetchUser(token);
    }
  }, [token]);

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
      <Navigations token={token} setToken={setToken} setUser={setUser} />
      <Routes>
        <Route
          path="/"
          element={<HomePage books={books} fetchBooks={fetchBooks} />}
        />
        <Route
          path="/books/:id"
          element={<SingleBook user={user} token={token} />}
        />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route
          path="/register"
          element={<Register token={token} setToken={setToken} />}
        />
        <Route
          path="/account"
          element={
            <Account
              user={user}
              setUser={setUser}
              setToken={setToken}
              token={token}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
