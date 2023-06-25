import { Memo } from "../../../types";
import { S } from "./style";
import { ReactComponent as BookmarkFilled } from "../../../../public/assets/bookmarkFilled.svg";
import { ReactComponent as Bookmark } from "../../../../public/assets/bookmark.svg";
import { ReactComponent as Dot } from "../../../../public/assets/dot.svg";
import Button from "../../Button";
import SelectedContentModal from "../../SelectedContent/SelectedContentModal";
import { ModalPortal } from "../../ModalPortal/ModalPortal";
import useModal from "../../../hooks/useModal";
interface CardWrapperProps {
  children: React.ReactNode;
  card: Memo;
}

// pin 버튼, edit 버튼, 태그버튼 추가 예정
export default function CardWrapper({ children, card }: CardWrapperProps) {
  const { modalOpen, openModal, closeModal } = useModal();

  return (
    <S.Container>
      <S.MenuWrapper>
        <BookmarkFilled />
        <Dot />
      </S.MenuWrapper>
      <S.Content onClick={openModal}>{card.content}</S.Content>
      <S.TagWrapper>
        {card.tags.map((e, idx) => (
          <Button type="TAG" text={e.name} key={idx} />
        ))}
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
