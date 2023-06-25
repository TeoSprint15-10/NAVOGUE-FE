import { axiosInstance } from ".";

import { MemoTagListData } from "../types";

const postMemoTagList = async (tagData: MemoTagListData) => {
  const response = await axiosInstance.post("/tag", tagData);
  return response.data;
};

export { postMemoTagList };
