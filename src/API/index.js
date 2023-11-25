const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
export const registerUser = async (userObj) => {
  try {
    const rsp = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: userObj.firstname,
        lastname: userObj.lastname,
        email: userObj.email,
        password: userObj.password,
      }),
    });
    const json = await rsp.json();
    return json.token;
  } catch (err) {
    console.error(err);
  }
};
export const loginUser = async (userObj) => {
  try {
    const rsp = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userObj.email,
        password: userObj.password,
      }),
    });
    const json = await rsp.json();
    return json.token;
  } catch (err) {
    console.error(err);
  }
};
export const getUser = async (token) => {
  try {
    const rsp = await fetch(`${API_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await rsp.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};
