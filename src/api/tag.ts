
import { axiosWithAccessToken } from "./";
import { MemoTagData, MemoTagListData } from "../types";

const getTagList = async () => {
  const response = await axiosWithAccessToken.get("/tag");
  return response.data;
};


const createTags = async (tagData: MemoTagListData) => {
  const { memoId, tagNames } = tagData;
  const requestData = JSON.stringify({
    memoId,
    tagNames,
  });
  const response = await axiosWithAccessToken.post("/tag", requestData);
  return response.data;
};

const deleteTag = async (tagData: MemoTagData) => {
  const response = await axiosWithAccessToken.delete(
    `/tag?tagName=${tagData.tagName}&memoId=${tagData.memoId}`
  );

  return response.data;
};

export { createTags, deleteTag, getTagList };

