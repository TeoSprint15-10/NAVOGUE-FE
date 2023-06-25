import { axiosInstance, axiosWithAccessToken } from "./";
import { TextMemo } from "../types";
import { MemoListResponse } from "../types/responseType";

interface IPostMemo {
  content: string;
  contentType: string;
}

const getMemoSearchedList = async (type?: string, value?: string) => {
  const response = await axiosInstance.get<TextMemo[]>(`/memo`, {
    params: {
      [type!]: value,
    },
  });

  return response.data;
};

const getMemoList = async (pageParam: number) => {
  const response = await axiosWithAccessToken.get<MemoListResponse>(
    `/memo?page=${pageParam}`
  );

  return response.data;
};

const createMemo = async (contentData: IPostMemo) => {
  const { content, contentType } = contentData;
  const response = await axiosInstance.post(
    "/memo",
    {
      content,
      contentType,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Cookie: "JSESSIONID=81E3889A3D7E6FE69927C042E7E2BA4A",
      },
    }
  );
  return response.data;
};

const deleteMemo = async (id: number) => {
  const response = await axiosInstance.delete(`/memo/${id}`);
  return response.data;
};

export { getMemoList, getMemoSearchedList, createMemo, deleteMemo };
