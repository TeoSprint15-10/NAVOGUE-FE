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

interface CardWrapperProps {
  card: TextMemo | UrlMemo;
}

export default function CardWrapper({ card }: CardWrapperProps) {
  console.log(card);

  const { modalOpen, openModal, closeModal } = useModal();
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
  const { value, onChange } = useInput();

  const handleDotClick = () => {
    setShowDeleteButton(true);
    modifyMemo({ content: "test", id: 12 });
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
            <Button type="TAG" text={"완료"} />
          </S.ButtonWrapper>
        ) : (
          <Dot onClick={handleDotClick} />
        )}
      </S.MenuWrapper>
      {showDeleteButton ? (
        <S.ModifyTextArea value={"잠시"} placeholder={"대기"} />
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
          <Button type="TAG_ADD" text={"..."} />
          {showDeleteButton && <S.AddTagBtn />}
        </S.ModifyBtnWrapper2>
      </S.TagWrapper>
    </S.Container>
  );
}
