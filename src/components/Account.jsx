import { useEffect, useState } from "react";
import { removeReservation, getReservations } from "../API";

export default function Account({ user, setUser, token }) {
  const [booklist, setBooklist] = useState([]);

  useEffect(() => {
    if (user) {
      setBooklist(user?.books);
    }
  }, [user]);

  async function returnBook(id, token) {
    console.log("token", token);
    try {
      await removeReservation(id, token);
      const newList = await getReservations(token);
      console.log(newList);
      setBooklist(newList.reservation);
    } catch (error) {
      console.error(error);
    }
  }

  return user ? (
    <div>
      <h1>
        Welcome, {user.firstname} {user.lastname} - {user.email}!
      </h1>
      <div className="account-books-list">
        {booklist.map((book, index) => {
          return (
            <div key={index}>
              <h2 className="account-title">{book.title}</h2>
              <img src={book.coverimage} alt={book.title} width="200"></img>
              <button
                className="return-button"
                onClick={async () => {
                  await returnBook(book.id, token);
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
