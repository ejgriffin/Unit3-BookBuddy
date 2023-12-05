import { removeReservation } from "../API";
import React from "react";

export default function Account({ user, token, fetchUser }) {
  async function returnBook(bookid, token) {
    try {
      await removeReservation(bookid, token);
      // await fetchUser();
    } catch (error) {
      console.error(error);
    }
  }

  return user ? (
    <div>
      <h1>Welcome, User - {user.email}!</h1>
      <div className="account-books-list">
        {user.books.map((book, index) => {
          return (
            <div key={index}>
              <h2 className="account-title">{book.title}</h2>
              <img src={book.coverimage} alt={book.title} width="200"></img>
              <button
                className="return-button"
                onClick={async () => {
                  await returnBook(book.id);
                }}
              >
                Return Book
              </button>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <p className="login-message">You must log in to view this page!</p>
  );
}
