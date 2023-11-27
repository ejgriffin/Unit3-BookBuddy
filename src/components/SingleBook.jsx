// TODO - add your code to create a functional React component that renders details for a single book.
// Fetch the book data from the provided API.
// You may consider conditionally rendering a 'Checkout' button for logged in users.
import { Link, useParams } from "react-router-dom";
import React from "react";
const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
import { useState, useEffect } from "react";

export default function SingleBook() {
  const { id } = useParams();
  console.log(id);
  const [singleBook, setSingleBook] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await fetch(`${API_URL}/books/${id}`);
        const result = await response.json();
        console.log(result);
        setSingleBook(result.books.id);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBook();
  }, []);

  return (
    <div className="single-book">
      <img src={singleBook?.coverimage} alt="" width="400"></img>
      <h1>Title: {singleBook?.title}</h1>
      <h2>Author: {singleBook?.author}</h2>
      <p>{singleBook?.description}</p>
      <p>{singleBook?.available}</p>

      <Link to="/" className="close-button">
        Close
      </Link>
    </div>
  );
}
