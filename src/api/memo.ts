import { axiosInstance } from "./";
import { Memo } from "../types";

const getMemoList = async () => {
  const response = await axiosInstance.get<Memo[]>("/src/data/memoList.json");

  return response.data;
};

export { getMemoList };
