import { useState } from "react";
import bookLogo from "./assets/books.png";
import Register from "./components/Register";
import Account from "./components/Account";
import Login from "./components/Login";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Book Buddies
      </h1>
      <div>
        <Link to="/account">Account</Link>
      </div>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/account" element={<Account setToken={setToken} />} />
      </Routes>
    </>
  );
}

export default App;
