import { useState } from "react";
import bookLogo from "./assets/books.png";
import Register from "./components/Register";
import Account from "./components/Account";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  const [token, setToken] = useState(null);

  return (
    <BrowserRouter>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Book Buddy
      </h1>
      <div>
        <Link to="/account">Account</Link>
      </div>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
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
          element={<Account token={token} setToken={setToken} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
