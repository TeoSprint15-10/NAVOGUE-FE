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
import useInput from "../../../hooks/useInput";

interface CardWrapperProps {
  children: React.ReactNode;
  card: Memo;
}

export default function CardWrapper({ children, card }: CardWrapperProps) {
  const { modalOpen, openModal, closeModal } = useModal();
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const { value, onChange } = useInput();

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
      {showDeleteButton ? (
        <S.ModifyTextArea value={value} placeholder={"대기"} />
      ) : (
        <S.Content onClick={openModal}>{card.content}</S.Content>
      )}
      <S.TagWrapper>
        <S.TagsBtnWrapper>
          {card.tags.map((e, idx) => (
            <S.ModifyBtnWrapper1 key={idx}>
              <Button type="TAG" text={e.name} />
              {showDeleteButton && <S.DeleteBtn />}
            </S.ModifyBtnWrapper1>
          ))}
        </S.TagsBtnWrapper>
        <S.ModifyBtnWrapper2>
          <Button type="TAG_ADD" text={"..."} />
          {showDeleteButton && <S.AddTagBtn />}
        </S.ModifyBtnWrapper2>
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
