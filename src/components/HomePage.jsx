import React from "react";
import { useState } from "react";
import Books from "./Books";

export default function HomePage({ books, fetchBooks }) {
  const [query, setQuery] = useState("");
  return (
    <>
      <div className="search-bar">
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>
      <div className="books-list">
        {books
          .filter((book) => book.title.toLowerCase().includes(query))
          .map((book) => (
            <Books key={book.id} novel={book} fetchBooks={fetchBooks} />
          ))}
      </div>
    </>
  );
}
