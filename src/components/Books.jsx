// TODO - add your code to create a functional React component that displays all of the available books in the library's catalog.
// Fetch the book data from the provided API.
// Users should be able to click on an individual book to navigate to the SingleBook component and view its details.
import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";

import Homepage from "./HomePage";
import SingleBook from "./SingleBook";

export default function Books({ novel }) {
  return (
    <div>
      <h2>{novel?.title}</h2>
      <h3>{novel?.author}</h3>
      <img src={novel?.coverimage} alt={novel?.title} width="200"></img>
      <button>Details</button>
    </div>
  );
}
