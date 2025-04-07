import axios from "axios";

const axiosBase = axios.create({
  // baseURL: "http://localhost:6063/api",

  baseURL: "https://evangadi-backend-2-s5hi.onrender.com/api",
});
export default axiosBase;