import { atom } from "recoil";

const initialState = {
  tag: false,
  keyword: false,
  type: false,
};

export const filterState = atom({
  key: "filterState",
  default: initialState,
});
