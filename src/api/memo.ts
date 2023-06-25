import { axiosInstance, axiosWithAccessToken } from "./";
import { TextMemo } from "../types";
import { getMemoListResponse } from "../types/responseType";

const getMemoSearchedList = async (keyword?: string) => {
  const response = await axiosInstance.get<TextMemo[]>(
    `/memo?keyword=${keyword}`
  );
  return response.data;
};

const getMemoList = async () => {
  const response = await axiosWithAccessToken.get<getMemoListResponse>(
    "/api/memo"
  );

  return response.data;
};

export { getMemoList, getMemoSearchedList };
