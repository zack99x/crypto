import axios from "axios";

export default function setup() {
  axios.interceptors.request.use(
    function (config) {
      const token = window.localStorage.getItem("jwt-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );
}
