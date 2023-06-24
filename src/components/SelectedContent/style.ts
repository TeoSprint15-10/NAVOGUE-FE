import styled, { keyframes } from "styled-components";

const modalShow = keyframes`
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;

const modalBgShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);

  &.openModal {
    display: flex;
    align-items: center;
    animation: ${modalBgShow} 0.3s;
  }
`;

const ModalSection = styled.section`
  width: 90%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 2rem;
  background-color: #fff;
  animation: ${modalShow} 0.3s;
  overflow: hidden;
  border: 4px solid #a0c9a2;
`;

const ModalHeader = styled.header`
  position: relative;
  text-align: center;
  padding: 16px 64px 16px 16px;
  background-color: #f1f1f1;
  font-weight: 700;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  background-color: #f87070;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

const ModalMain = styled.main`
  padding: 16px;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
`;

const ModalFooter = styled.footer`
  padding: 12px 16px;
  text-align: right;
`;

const ModalFooterButton = styled.button`
  padding: 6px 12px;
  color: #fff;
  background-color: #6c757d;
  border-radius: 5px;
  font-size: 13px;
`;

export const S = {
  Modal,
  ModalSection,
  ModalHeader,
  ModalCloseButton,
  ModalMain,
  ModalFooter,
  ModalFooterButton,
};
