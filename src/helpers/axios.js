import Axios from "axios";

export const axios = () => {
  Axios.defaults.baseURL = process.env.REACT_APP_API_SERVER;
  Axios.defaults.headers.common["X-API-KEY"] =
    process.env.REACT_APP_JWT_SECRET_KEY;

  const token = localStorage.getItem("token");

  if (token) {
    Axios.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
         token
     )}`;
  }
  return Axios;
};
