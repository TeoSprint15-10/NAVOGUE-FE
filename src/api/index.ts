import Axios from "axios";

const BASE_URL = "https://courtney.reverof.p-e.kr:8443";

const axiosInstance = Axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const token = localStorage.getItem("token") || "";
console.log(token);
const axiosWithAccessToken = Axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Token": token,
  },
});

export { axiosInstance, axiosWithAccessToken };
