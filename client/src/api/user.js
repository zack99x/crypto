import axios from "axios";

export const create_user = async (email, username, password) => {
  return await axios.post(
    "http://localhost:8000/users",
    {
      email,
      username,
      password,
    },
    {
      headers: {
        accept: "application/json",
      },
    }
  );
};

export const register = async (username, password, email) => {
  console.log("sign up", username, password, email);
};
