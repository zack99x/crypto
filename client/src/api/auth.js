import axios from "axios";

export const authWithGithub = async () => {
  axios.get("http://localhost:8080");
  console.log("authWithGithub");
};

export const login = async (username, password) => {
  console.log("simple authentication", username, password);
};

export const register = async (username, password, email) => {
  console.log("sign up", username, password, email);
};
