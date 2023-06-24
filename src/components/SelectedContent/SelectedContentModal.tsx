import React from "react";
import { S } from "./style";

interface SelectedContentModalProps {
  open: boolean;
  close: () => void;
  card: { content: string };
  header: string;
}

const SelectedContentModal = (props: SelectedContentModalProps) => {
  const { open, close, card, header } = props;

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
          <S.ModalMain>{card.content}</S.ModalMain>
        </S.ModalSection>
      ) : null}
    </S.Modal>
  );
};

export default SelectedContentModal;
