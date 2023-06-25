import { axiosWithAccessToken } from ".";
import { MemoTagListData } from "../types";

const createTag = async (tagData: MemoTagListData) => {
  const response = await axiosWithAccessToken.post("/tag", tagData);
  return response.data;
};

const getTagList = async () => {
  const response = await axiosWithAccessToken.get("/tag");
  return response.data;
};

export { createTag, getTagList };
