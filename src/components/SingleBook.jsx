// TODO - add your code to create a functional React component that renders details for a single book.
// Fetch the book data from the provided API.
// You may consider conditionally rendering a 'Checkout' button for logged in users.
import { useParams, useNavigate } from "react-router-dom";
import React from "react";
const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
import { useState, useEffect } from "react";

export default function SingleBook() {
  const { id } = useParams();
  console.log(id);
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await fetch(`${API_URL}/books/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        console.log(result);
        setDetails(result.book);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBook();
  }, []);

  return (
    <div className="single-book">
      <img src={details?.coverimage} alt={details?.title} width="400"></img>
      <h1>
        <span className="book-title">{details?.title}</span> by{" "}
        <span className="author">{details?.author}</span>
      </h1>

      <p>{details?.description}</p>
      <p>{details?.available}</p>

      <button type="button" onClick={handleClick}>
        Close
      </button>
    </div>
  );
}
