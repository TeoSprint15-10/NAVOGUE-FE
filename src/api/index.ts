import Axios from "axios";

const BASE_URL = "http://courtney.reverof.p-e.kr:8080";

const axiosInstance = Axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const axiosWithAccessToken = Axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Token": import.meta.env.VITE_APP_ACCESS_TOKEN,
  },
});

export { axiosInstance, axiosWithAccessToken };
