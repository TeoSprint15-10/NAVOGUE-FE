import React from "react";
import { S } from "./style";

const SelectedContentModal = (props) => {
  const { open, close, header } = props;

  return (
    <S.Modal className={open ? "openModal" : ""}>
      {open ? (
        <S.ModalSection>
          <S.ModalHeader>
            {header}
            <S.ModalCloseButton className="close" onClick={close}>
              &times;
            </S.ModalCloseButton>
          </S.ModalHeader>
          <S.ModalMain>{props.children}</S.ModalMain>
          <S.ModalFooter>
            <S.ModalFooterButton className="close" onClick={close}>
              close
            </S.ModalFooterButton>
          </S.ModalFooter>
        </S.ModalSection>
      ) : null}
    </S.Modal>
  );
};

export default SelectedContentModal;

// function App() {
//   // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
//   const [modalOpen, setModalOpen] = useState(false);

//   const openModal = () => {
//     setModalOpen(true);
//   };
//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <>
//       <button onClick={openModal}>모달팝업</button>
//       //header 부분에 텍스트를 입력한다.
//       <SelectedContentModal open={modalOpen} close={closeModal} header="Modal heading">
//       </SelectedContentModal>
//     </>
//   );
// }
