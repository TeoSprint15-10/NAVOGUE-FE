import * as S from "./style";
import CardWrapper from "../CardWrapper";
import { Memo } from "../../types";
import { useState } from "react";
import SelectedContentModal from "../SelectedContent/SelectedContentModal";
import { ModalPortal } from "../SelectedContent/ModalPortal";

interface CardListProps {
  cardList: Memo[] | undefined;
}

export default function CardList({ cardList }: CardListProps) {
  const TextMemoContent = ({ content }: { content: string }) => (
    <span>{content}</span>
  );
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <S.CardListWrapper>
      {cardList?.map((card, idx) => (
        <CardWrapper key={idx} card={card}>
          <ModalPortal>
            <SelectedContentModal
              open={modalOpen}
              close={closeModal}
              header="전체보기"
              card={card}
            ></SelectedContentModal>
          </ModalPortal>
          <TextMemoContent content={card.content} />
          <button onClick={openModal}>Modal</button>
        </CardWrapper>
      ))}
    </S.CardListWrapper>
  );
}
