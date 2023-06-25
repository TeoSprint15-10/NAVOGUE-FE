import styled from "styled-components";
import DeleteMemoButton from "../../../../public/assets/deleteMemoButton.png";
import addTagButton from "../../../../public/assets/addTagButton.png";

const Container = styled.div`
  width: 23%;
  height: 240px;
  background-color: #f7f8f9;
  border-radius: 10px;
  padding: 10px;
  margin-right: 50px;
  margin-bottom: 50px;
  overflow-y: hidden;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  height: 50px;
  width: 120px;
`;

const Content = styled.div`
  width: 100%;
  height: 150px;
  background-color: white;
  cursor: pointer;
`;
const ModifyTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  background-color: white;
  border: none;
  resize: none;
`;

const TagWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  height: 50px;
  position: relative;
`;
const TagsBtnWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 0;
`;
const ModifyBtnWrapper1 = styled.div`
  position: relative;
  gap: 10px;
  :first-child {
    cursor: default;
  }
`;
const ModifyBtnWrapper2 = styled.div`
  position: relative;
  gap: 10px;
  :first-child {
    cursor: default;
  }
`;

const DeleteBtn = styled.button`
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
const AddTagBtn = styled.button`
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

export const S = {
  Container,
  MenuWrapper,
  ButtonWrapper,
  TagsBtnWrapper,
  ModifyBtnWrapper1,
  ModifyBtnWrapper2,
  TagWrapper,
  DeleteBtn,
  AddTagBtn,
  Content,
  ModifyTextArea,
};
