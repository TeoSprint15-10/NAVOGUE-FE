import { axiosInstance } from "./";

import { Memo } from "../types";

const getMemoSearchedList = async (keyword?: string) => {
  const response = await axiosInstance.get<Memo[]>(`/memo?keyword=${keyword}`);
  return response.data;
};

const getMemoList = async () => {
  const response = await axiosInstance.get<Memo[]>("/src/data/memoList.json");

  return response.data;
};

export { getMemoList, getMemoSearchedList };
