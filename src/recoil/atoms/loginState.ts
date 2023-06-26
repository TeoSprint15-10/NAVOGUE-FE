import { atom } from "recoil";

export const loginState = atom({
  key: "isLogin",
  default: JSON.parse(localStorage.getItem("token") || "") ? true : false,
});
