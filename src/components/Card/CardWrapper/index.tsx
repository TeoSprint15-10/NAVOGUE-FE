import { Memo } from "../../../types";
import { S } from "./style";
import { ReactComponent as BookmarkFilled } from "../../../../public/assets/bookmarkFilled.svg";
import { ReactComponent as Bookmark } from "../../../../public/assets/bookmark.svg";
import { ReactComponent as Dot } from "../../../../public/assets/dot.svg";
import DeleteMemoButton from "../../../../public/assets/deleteMemoButton.png";
import addTagButton from "../../../../public/assets/addTagButton.png";
import Button from "../../Button";
import SelectedContentModal from "../../SelectedContent/SelectedContentModal";
import { ModalPortal } from "../../ModalPortal/ModalPortal";
import useModal from "../../../hooks/useModal";
import { useState } from "react";

interface CardWrapperProps {
  children: React.ReactNode;
  card: Memo;
}

export default function CardWrapper({ children, card }: CardWrapperProps) {
  const { modalOpen, openModal, closeModal } = useModal();
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleDotClick = () => {
    setShowDeleteButton(true);
  };

  return (
    <S.Container>
      <S.MenuWrapper>
        <BookmarkFilled />
        {showDeleteButton ? (
          <S.ButtonWrapper>
            <Button type="TAG" text={"삭제"} />
            <Button type="TAG" text={"완료"} />
          </S.ButtonWrapper>
        ) : (
          <Dot onClick={handleDotClick} />
        )}
      </S.MenuWrapper>
      <S.Content onClick={openModal}>{card.content}</S.Content>
      <S.TagWrapper>
        {card.tags.map((e, idx) => (
          <S.buttonWrapper key={idx}>
            <Button type="TAG" text={e.name} />
            {showDeleteButton && <S.deleteBtn />}
          </S.buttonWrapper>
        ))}
        <S.buttonWrapper>
          <Button type="TAG_ADD" text={"..."} />
          {showDeleteButton && <S.addTagBtn />}
        </S.buttonWrapper>
      </S.TagWrapper>
      <ModalPortal>
        <SelectedContentModal
          open={modalOpen}
          close={closeModal}
          header="전체보기"
          card={card}
        ></SelectedContentModal>
      </ModalPortal>
    </S.Container>
  );
}
