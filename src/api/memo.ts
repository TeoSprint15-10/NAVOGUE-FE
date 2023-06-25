import { axiosInstance } from "./";

import { TextMemo, UrlMemo } from "../types";

const getMemoSearchedList = async (keyword?: string) => {
  const response = await axiosInstance.get<TextMemo[]>(
    `/memo?keyword=${keyword}`
  );
  return response.data;
};

const getMemoList = async () => {
  const response = await axiosInstance.get<(TextMemo | UrlMemo)[]>(
    "/src/data/memoList.json"
  );

  return response.data;
};

export { getMemoList, getMemoSearchedList };
