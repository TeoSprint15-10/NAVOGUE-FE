import Axios from "axios";

const BASE_URL = "http://courtney.reverof.p-e.kr:8080";

const axiosInstance = Axios.create({
  url: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const axiosWithAccessToken = Axios.create({
  url: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

axiosWithAccessToken.interceptors.request.use(
  (config) => {
    const accessToken = import.meta.env.VITE_APP_ACCESS_TOKEN;

    if (config.headers && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance, axiosWithAccessToken };
