import styled from "styled-components";
import DeleteMemoButton from "../../../../public/assets/deleteMemoButton.png";
import addTagButton from "../../../../public/assets/addTagButton.png";

export const Container = styled.li`
  position: relative;
  width: 23%;
  height: 240px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin-right: 50px;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  width: 100%;
  height: 150px;
  background-color: white;
  cursor: pointer;
`;

export const ModifyTextArea = styled.textarea`
  width: 100%;
  height: 120px;
  background-color: white;
  margin-top: 10px;
  border: none;
  resize: none;
`;

export const TagWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin-top: 10px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  gap: 4px;
  padding-right: 40px;
  box-sizing: border-box;
`;

export const TagsBtnWrapper = styled.div`
  overflow-y: hidden;
  position: relative;
  display: flex;
  gap: 10px;
  width: 100%;
  height: 50px;
  /* padding: 10px 0; */
  /* box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  } */
`;

export const ModifyBtnWrapper1 = styled.div`
  position: relative;
  gap: 10px;
  :first-child {
    cursor: default;
  }
`;

export const ModifyBtnWrapper2 = styled.div`
  position: absolute;
  right: 0;
  gap: 10px;
  /* border: 1px solid green; */
  :first-child {
    cursor: default;
  }
`;

export const DeleteBtn = styled.button`
  position: absolute;
  border-radius: 50%;
  border-style: none;
  background-image: url(${DeleteMemoButton});
  background-size: cover;
  background-color: #ffff;
  width: 15px;
  height: 15px;
  right: 0;
  top: -5px;
  padding: 0;
  cursor: pointer;
`;

export const AddTagBtn = styled.button`
  position: absolute;
  border-radius: 50%;
  border-style: none;
  background-image: url(${addTagButton});
  background-size: contain;
  background-color: #ffff;
  width: 15px;
  height: 15px;
  right: 0;
  top: -5px;
  padding: 0;
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  width: 100%;
`;

export const TextMemoContentWrapper = styled.div`
  width: 100%;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  height: 50px;
  width: 120px;
`;

export const UrlMemoContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 165px;
  cursor: pointer;
`;

export const BookMarkWrapper = styled.div`
  cursor: pointer;
`;
