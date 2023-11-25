import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../API";

export default function Account({ token }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        console.log(token);
        const nextUser = await getUser(token);
        setUser(nextUser);
      } catch (err) {
        console.log(err);
      }
    }

    fetchUser();
  }, []);

  return token ? (
    user && (
      <div>
        <h2>
          {user.firstname} {user.lastname} - ({user.email})
        </h2>
      </div>
    )
  ) : (
    <Link to="/login">Please log in before viewing this page!</Link>
  );
}
