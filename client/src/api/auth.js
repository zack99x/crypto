import axios from "axios";

export const authWithGithub = async () => {
  axios.get("http://localhost:8080");
  console.log("authWithGithub");
};

export const basicAuth = async (username, password) => {
  return await axios.post(
    "http://localhost:8000/login",
    {
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
