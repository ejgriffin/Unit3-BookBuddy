import { useState } from "react";
import { loginUser } from "../API";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userObj = {
      email,
      password,
    };
    const nextToken = await loginUser(userObj);
    console.log(nextToken);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {" "}
        E-Mail:{" "}
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        {" "}
        Password:{" "}
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
    </form>
  );
}
