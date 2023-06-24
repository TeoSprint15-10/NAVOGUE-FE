import { axiosInstance } from "./";
import { TextMemo } from "../types";

const getMemoSearchedList = async (keyword?: string) => {
  const response = await axiosInstance.get<TextMemo[]>(
    `/memo?keyword=${keyword}`
  );
  return response.data;
};

export { getMemoSearchedList };
