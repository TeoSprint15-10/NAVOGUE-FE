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
interface CardWrapperProps {
  card: TextMemo | UrlMemo;
}

export default function CardWrapper({ card }: CardWrapperProps) {
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

  const handleDelete = () => {
    console.log(card.id);

    del(card.id);
    console.log("hello");
  };
  return (
    <S.Container onClick={handleDelete}>
      <S.MenuWrapper>
        {card.isPinned ? <BookmarkFilled /> : <Bookmark />}
        <Dot />
      </S.MenuWrapper>

      {isTextMemo(card) && (
        <>
          <S.TextMemoContentWrapper onClick={openModal}>{card.content}</S.TextMemoContentWrapper>
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

      <S.TagWrapper>
        {card.tags.map((tag, idx) => (
          <Button type="TAG" text={tag} key={idx} />
        ))}
      </S.TagWrapper>
    </S.Container>
  );
}
