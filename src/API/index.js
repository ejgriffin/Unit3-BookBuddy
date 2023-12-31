const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export const registerUser = async (userObj) => {
  console.log(userObj);
  try {
    const rsp = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: userObj.firstName,
        lastname: userObj.lastName,
        email: userObj.email,
        password: userObj.password,
      }),
    });
    const json = await rsp.json();
    console.log("registerUser", json);
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
    console.log("loginUser", json);
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
  } catch (error) {
    console.log(error);
  }
};

export const updateBookAvailability = async (id, available, token) => {
  try {
    const rsp = await fetch(`${API_URL}/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ available }),
    });
    const json = await rsp.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

export const removeReservation = async (id, token) => {
  try {
    const rsp = await fetch(`${API_URL}/reservations/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await rsp.json();
    return json;
  } catch (err) {
    console.log(err);
  }
};

export const getReservations = async (token) => {
  try {
    const rsp = await fetch(`${API_URL}/reservations`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await rsp.json();
    console.log(json);
    return json;
  } catch (err) {
    console.log(err);
  }
};
