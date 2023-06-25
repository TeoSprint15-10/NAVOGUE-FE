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
    // "Access-Token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwMjI2ODZAbmF2ZXIuY29tIiwiaWF0IjoxNjg3NjgwODQyLCJleHAiOjE5MDM2ODA4NDJ9.HdoXLX2KR5IArs1q2rbYvJrF0fSLGhdgtNlBgSFax1U"
  },
});

export { axiosInstance, axiosWithAccessToken };
