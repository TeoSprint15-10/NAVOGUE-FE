import { TextMemo, UrlMemo } from "../../../types";
import { ReactComponent as BookmarkFilled } from "../../../../public/assets/bookmarkFilled.svg";
import { ReactComponent as Bookmark } from "../../../../public/assets/bookmark.svg";
import { ReactComponent as Dot } from "../../../../public/assets/dot.svg";
import DeleteMemoButton from "../../../../public/assets/deleteMemoButton.png";
import addTagButton from "../../../../public/assets/addTagButton.png";
import Button from "../../Button";
import SelectedContentModal from "../../SelectedContent/SelectedContentModal";
import { ModalPortal } from "../../ModalPortal/ModalPortal";
import useModal from "../../../hooks/useModal";
import UrlThumbnail from "../UrlThumbnail";
import * as S from "./style";
import { isTextMemo, isUrlMemo } from "../../../utils/memoTypeGuard";
import { deleteMemo } from "../../../api/memo";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { QUERY_KEY } from "../../../constants/key";
import { useState } from "react";
import useInput from "../../../hooks/useInput";
import { modifyMemo } from "../../../api/memo";
import TagModal from "../../TagModal";

interface CardWrapperProps {
  card: TextMemo | UrlMemo;
}

export default function CardWrapper({ card }: CardWrapperProps) {
  const { modalOpen, openModal, closeModal } = useModal();
  const {
    modalOpen: isOpened,
    openModal: handleModalOpen,
    closeModal: handleModalClose,
  } = useModal();

  const queryClient = useQueryClient();
  const { mutate: del } = useMutation(deleteMemo, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEY.MEMO_LIST]);
      console.log(data);
    },
    onError: (data) => {
      console.log(data);
    },
  });
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const { value: content, onChange: onContentChange } = useInput();
  console.log(content);

  const handleDotClick = () => {
    setShowDeleteButton(true);
    //onContentChange({ target: { value: card.content } });
  };
  const handleModify = () => {
    modifyMemo({ content, id: card.id });
  };
  const handleDelete = () => {
    console.log(card.id);

    del(card.id);
    console.log("hello");
  };
  return (
    // <S.Container onClick={handleDelete}>
    <S.Container>
      <S.MenuWrapper>
        {card.isPinned ? <BookmarkFilled /> : <Bookmark />}
        {showDeleteButton ? (
          <S.ButtonWrapper>
            <Button type="TAG" text={"삭제"} />
            <Button type="TAG" text={"완료"} onClick={handleModify} />
          </S.ButtonWrapper>
        ) : (
          <Dot onClick={handleDotClick} />
        )}
      </S.MenuWrapper>
      {showDeleteButton ? (
        <S.ModifyTextArea value={content} onChange={onContentChange} />
      ) : (
        <>
          {card && isTextMemo(card) && (
            <>
              <S.TextMemoContentWrapper onClick={openModal}>
                {card.content}
              </S.TextMemoContentWrapper>
              <ModalPortal>
                <SelectedContentModal
                  open={modalOpen}
                  close={closeModal}
                  header="전체보기"
                  card={card}
                ></SelectedContentModal>
              </ModalPortal>
            </>
          )}
          {card && isUrlMemo(card) && (
            <S.UrlMemoContentWrapper>
              <UrlThumbnail card={card} />
            </S.UrlMemoContentWrapper>
          )}
        </>
      )}
      <S.TagWrapper>
        <S.TagsBtnWrapper>
          {card.tags.slice(0, 3).map((tag, idx) => (
            <S.ModifyBtnWrapper1>
              <Button type="TAG" text={tag} key={idx} />
              {showDeleteButton && <S.DeleteBtn />}
            </S.ModifyBtnWrapper1>
          ))}
        </S.TagsBtnWrapper>
        <S.ModifyBtnWrapper2>
          <Button type="TAG_ADD" text={"…"} />
          {showDeleteButton && <S.AddTagBtn onClick={handleModalOpen} />}
        </S.ModifyBtnWrapper2>
        <ModalPortal>
          <TagModal
            memoId={card.id + ""}
            tagNames={card.tags}
            isOpened={isOpened}
            handleModalClose={handleModalClose}
          ></TagModal>
        </ModalPortal>
      </S.TagWrapper>
    </S.Container>
  );
}
