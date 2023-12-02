import { useState } from "react";
import Books from "./Books";

import React from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  return (
    <div className="search-bar">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <ul className="list">
        {books
          .filter((asd) => asd.books.title.toLowerCase().includes(query))
          .map((book) => (
            <li className="listItem" key={book.title}>
              {book.title}
            </li>
          ))}
      </ul>
    </div>
  );
}
