import { TextMemo, UrlMemo } from "../../../types";
import { ReactComponent as BookmarkFilled } from "../../../../public/assets/bookmarkFilled.svg";
import { ReactComponent as Bookmark } from "../../../../public/assets/bookmark.svg";
import { ReactComponent as Dot } from "../../../../public/assets/dot.svg";
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
import { useTogglePinMemo } from "../../../hooks/useTogglePinMemo";
import { deleteTag } from "../../../api/tag";

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
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const { value: content, onChange: onContentChange } = useInput(card.content);
  console.log(content);

  // queryClient logic
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

  const { mutate: modify } = useMutation(modifyMemo, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEY.MEMO_LIST]);
      console.log(data);
    },
    onError: (data) => {
      console.log(data);
    },
  });

  const { mutate: tagDel } = useMutation(deleteTag, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEY.MEMO_LIST]);
      console.log(data);
    },
    onError: (data) => {
      console.log(data);
    },
  });

  // 수정 버튼 click event
  const handleDotClick = () => {
    setShowDeleteButton(true);
    //onContentChange({ target: { value: card.content } });
  };
  // 수정완료 버튼 click event
  const handleModify = () => {
    setShowDeleteButton(false);
    modify({ content, id: card.id });
  };

  // 메모 삭제 버튼 click event
  const handleDelete = () => {
    setShowDeleteButton(false);
    del(card.id);
  };

  const { mutate } = useTogglePinMemo(card.id);
  const ontogglePinMemo = () => {
    mutate();
  };

  //태그 삭제 구현
  const handleTagDelete = (memoId: string, tagName: string) => {
    tagDel({ memoId, tagName });
  };

  return (
    <S.Container>
      <S.MenuWrapper>
        <S.BookMarkWrapper onClick={ontogglePinMemo}>
          {card.pinned ? <BookmarkFilled /> : <Bookmark />}
        </S.BookMarkWrapper>
        {showDeleteButton ? (
          <S.ButtonWrapper>
            <Button type="TAG" text={"삭제"} onClick={handleDelete} />
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
                />
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
          {card.tags.map((tag, idx) => (
            <S.ModifyBtnWrapper1>
              <Button type="TAG" text={tag} key={idx} />
              {showDeleteButton && (
                <S.DeleteBtn
                  onClick={() => handleTagDelete(card.id + "", tag)}
                />
              )}
            </S.ModifyBtnWrapper1>
          ))}
        </S.TagsBtnWrapper>
        <S.ModifyBtnWrapper2>
          <Button type="TAG_ADD" text={"…"} onClick={handleModalOpen} />
          {showDeleteButton && <S.AddTagBtn />}
        </S.ModifyBtnWrapper2>
        <ModalPortal>
          <TagModal
            memoId={card.id + ""}
            tagNames={card.tags}
            isOpened={isOpened}
            handleModalClose={handleModalClose}
          />
        </ModalPortal>
      </S.TagWrapper>
    </S.Container>
  );
}
