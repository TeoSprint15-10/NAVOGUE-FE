import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: 16;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 400px;
  margin: auto;
  border: 5px solid #a0c9a2;
  border-radius: 30px;
  background-color: #ffffff;
  overflow: hidden;
  z-index: 20;
  box-shadow: 0px 0px 10px 0px #00000040;
`;

export const ModalTitle = styled.h2`
  margin: 30px 0px;
  padding: 15px;
  font-size: 20px;
  color: #000000;
  text-align: center;
`;

export const ModalInputWrapper = styled.div`
  width: 100%;
`;

export const ModalInputBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 10px;
`;
export const ModalInput = styled.input`
  font-size: 15px;
  width: 80%;
  border: none;
  border-bottom: 3px solid #a0c9a2;
  &:focus {
    outline: none;
  }
`;

export const ModalForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const DuplicateTagMessage = styled.p`
  color: red;
  width: 100%;
  height: 16px;
  margin: 3px 0px;
`;

export const ModalAddButton = styled.button`
  cursor: pointer;
  height: 20px;
  border: none;
  color: #ffffff;
  font-size: 15px;
  border-radius: 3px;
  background: #a0c9a2;
`;

export const ModalTagWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0px;
  margin: 0px 10px;
  overflow-y: auto;
  align-content: flex-start;
  justify-content: center;
  gap: 10px;

  &::-webkit-scrollbar {
    width: 10px;
    height: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background: #a0c9a2;
    border: 2px solid #bbc7bc;
    border-radius: 12px 12px 12px 12px;
  }
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 10px 0px;
`;

export const ModalSubmitButton = styled.button`
  cursor: pointer;
  display: block;
  width: 105px;
  height: 35px;
  border: none;
  color: #ffffff;
  background-color: #a0c9a2;
  border-radius: 15px;
`;
