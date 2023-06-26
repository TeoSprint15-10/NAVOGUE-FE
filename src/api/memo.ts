import { axiosWithAccessToken } from "./";
import { MemoListResponse } from "../types/responseType";

interface IPostMemo {
  content: string;
  contentType: string;
}
interface ModifyMemo {
  content: string;
  id: number;
}

const getMemoSearchedList = async (page: number, type?: string, value?: string) => {
  const response = await axiosWithAccessToken.get<MemoListResponse>(`/memo?page=${page}`, {
    params: {
      [type || ""]: value,
    },
  });

  return response.data;
};

const getMemoList = async (pageParam: number) => {
  const response = await axiosWithAccessToken.get<MemoListResponse>(`/memo?page=${pageParam}`);

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

const modifyMemo = async (modifyData: ModifyMemo) => {
  const { content, id } = modifyData;
  const requestData = JSON.stringify({
    content,
    id,
  });
  const response = await axiosWithAccessToken.patch("/memo", requestData);
  console.log(response);
  return response.data;
};

export { getMemoList, getMemoSearchedList, createMemo, deleteMemo, modifyMemo };
