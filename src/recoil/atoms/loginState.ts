import { atom } from "recoil";

const token = localStorage.getItem("token") || "";

export const loginState = atom({
  key: "isLogin",
  default: token ? true : false,
});
