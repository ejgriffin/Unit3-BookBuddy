import React from "react";
import { useEffect, useState } from "react";
import Books from "./Books";

export default function HomePage({ books, fetchBooks }) {
  return (
    <div className="books-list">
      {books.map((book) => (
        <Books key={book.id} novel={book} fetchBooks={fetchBooks} />
      ))}
    </div>
  );
}
