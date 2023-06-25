import { useEffect } from "react";
import * as S from "./style";
import Button from "../Button";

export default function TagModal() {
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, []);

  return (
    <>
      <S.Overlay />
      <S.Wrapper style={{ top: scrollY + 100 }}>
        <S.ModalTitle>태그 추가</S.ModalTitle>
        <S.ModalSearchBar>
          <S.ModalSearchTitle>검색</S.ModalSearchTitle>
          <S.ModalSearchInput />
        </S.ModalSearchBar>
        <S.ModalTagWrapper>
          <Button type="TAG" text="리액트"></Button>
          <Button type="TAG" text="리액트"></Button>
          <Button type="TAG" text="리액트"></Button>
          <Button type="TAG" text="리액트"></Button>
          <Button type="TAG" text="리액트"></Button>
          <Button type="TAG" text="리액트"></Button>
          <Button type="TAG" text="리액트"></Button>
          <Button type="TAG" text="리액트"></Button>
          <Button type="TAG" text="리액트"></Button>
          <Button type="TAG" text="리액트"></Button>
          <Button type="TAG" text="리액트"></Button>
          <Button type="TAG" text="리액트"></Button>
          <Button type="TAG" text="리액트"></Button>
          <Button type="TAG" text="리액트"></Button>
          <Button type="TAG" text="리액트"></Button>
        </S.ModalTagWrapper>
        <S.ModalButtonWrapper>
          <S.ModalButton>저장</S.ModalButton>
        </S.ModalButtonWrapper>
      </S.Wrapper>
    </>
  );
}
