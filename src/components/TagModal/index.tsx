import { useEffect, useRef, useState } from "react";
import * as S from "./style";
import Button from "../Button";
import { MemoTagListData } from "../../types";
import { createTags } from "../../api/tag";

export default function TagModal({ memoId, tagNames }: MemoTagListData) {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState(tagNames);
  const [isOpen, setIsOpen] = useState(true);
  const [isDuplicateTag, setIsDuplicateTag] = useState(false);

  useEffect(() => {
    setTags(tagNames);
  }, [tagNames]);

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    setIsDuplicateTag(false);
  };

  const handleAddTags = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (trimmedValue === "" || tags.includes(trimmedValue)) {
      setIsDuplicateTag(true);
      return;
    }
    const updatedTagNames = [...tags, trimmedValue];
    setTags(updatedTagNames);
    setInputValue("");
  };

  const handleSaveTags = async (): Promise<void> => {
    await createTags({ memoId, tagNames: tags });
    setInputValue("");
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && <S.Overlay onClick={handleCloseModal} />}
      {isOpen && (
        <S.Wrapper style={{ top: scrollY + 100 }}>
          <S.ModalInputWrapper>
            <S.ModalTitle>태그 추가</S.ModalTitle>
            <S.ModalInputBar>
              <S.ModalForm onSubmit={handleAddTags}>
                <S.ModalInput onChange={handleInputChange} value={inputValue} />
                <S.ModalAddButton type="submit">추가</S.ModalAddButton>
              </S.ModalForm>
              <S.DuplicateTagMessage>{isDuplicateTag ? "중복된 태그가 있습니다." : ""}</S.DuplicateTagMessage>
            </S.ModalInputBar>
          </S.ModalInputWrapper>
          <S.ModalTagWrapper>
            {tags.map((item, index) => (
              <Button key={`${memoId}-${index}`} type="TAG" text={item} />
            ))}
          </S.ModalTagWrapper>
          <S.ModalButtonWrapper>
            <S.ModalSubmitButton onClick={handleSaveTags}>저장</S.ModalSubmitButton>
          </S.ModalButtonWrapper>
        </S.Wrapper>
      )}
    </>
  );
}
