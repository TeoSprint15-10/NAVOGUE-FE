import { axiosWithAccessToken } from "./";
import { TextMemo } from "../types";
import { getMemoListResponse } from "../types/responseType";

interface IPostMemo {
  content: string;
  contentType: string;
}

const getMemoSearchedList = async (page: number, type?: string, value?: string) => {
  const response = await axiosWithAccessToken.get<TextMemo[]>(`/memo?page=${page}`, {
    params: {
      [type!]: value,
    },
  });

  return response.data;
};

const getMemoList = async () => {
  const response = await axiosWithAccessToken.get<getMemoListResponse>("/memo?page=1");

  return response.data;
};

const createMemo = async (contentData: IPostMemo) => {
  const { content, contentType } = contentData;
  const requestData = JSON.stringify({
    content,
    contentType,
  });
  const response = await axiosWithAccessToken.post("/memo", requestData);
  return response.data;
};

const deleteMemo = async (id: number) => {
  const response = await axiosWithAccessToken.delete(`/memo/${id}`);
  console.log(response);

  return response.data;
};

export { getMemoList, getMemoSearchedList, createMemo, deleteMemo };
