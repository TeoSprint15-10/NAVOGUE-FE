import { atom } from "recoil";

interface IState {
  triggerType: undefined | string;
  target: undefined | string;
}

const initialState: IState = {
  triggerType: undefined,
  target: undefined,
};

export const filterState = atom({
  key: "filterState",
  default: initialState,
});
