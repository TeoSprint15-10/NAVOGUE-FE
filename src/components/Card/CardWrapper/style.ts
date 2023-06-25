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
  overflow-y: hidden;
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
const ModifyTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  background-color: white;
  border: none;
  resize: none;
`;

export const TagWrapper = styled.div`
  position: absolute;
  bottom: 0;
  margin-top: 10px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 4px;
`;
