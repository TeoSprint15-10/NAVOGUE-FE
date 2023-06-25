import { axiosInstance } from "./";

import { Memo } from "../types";

interface IPostMemo {
  content: string;
  contentType: string;
}

const getMemoSearchedList = async (keyword?: string) => {
  const response = await axiosInstance.get<Memo[]>(`/memo?keyword=${keyword}`);
  return response.data;
};

const getMemoList = async () => {
  const response = await axiosInstance.get<Memo[]>("/src/data/memoList.json");

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
