import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: 16;
`;
export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  left: 0;
  right: 0;
  margin: 0 auto;
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

export const ModalSearchBar = styled.div``;

export const ModalSearchTitle = styled.h4`
  margin-bottom: 20px;
  font-size: 12px;
`;
export const ModalSearchInput = styled.input`
  font-size: 12px;
  border: none;
  width: 240px;
  border-bottom: 3px solid #a0c9a2;
  &:focus {
    outline: none;
  }
`;

export const ModalTagWrapper = styled.div`
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

export const ModalButton = styled.button`
  cursor: pointer;
  display: block;
  width: 105px;
  height: 35px;
  border: none;
  color: #ffffff;
  background-color: #a0c9a2;
  border-radius: 15px;
`;
