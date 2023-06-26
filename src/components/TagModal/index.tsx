import { useEffect, useState } from "react";
import * as S from "./style";
import Button from "../Button";
import { createTags } from "../../api/tag";
import { filterDuplicateElements } from "../../utils/filterDuplicateElements";

interface TagModalProps {
  memoId: string;
  tagNames: string[];
  isOpened: boolean;
  handleModalClose: () => void;
}

export default function TagModal({
  memoId,
  tagNames,
  isOpened,
  handleModalClose,
}: TagModalProps) {
  const filteredTags = filterDuplicateElements(tagNames);
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState(filteredTags);
  const [isDuplicateTag, setIsDuplicateTag] = useState(false);

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
    setTags(filterDuplicateElements(updatedTagNames));
    setInputValue("");
  };

  const handleSaveTags = async (): Promise<void> => {
    const newTags = tags.filter((tag) => !tagNames.includes(tag));
    if (newTags.length === 0) {
      return;
    }
    await createTags({ memoId, tagNames: newTags });
    setInputValue("");
    setIsDuplicateTag(false);
    handleModalClose();
  };

  return (
    <>
      {isOpened && <S.Overlay onClick={handleModalClose} />}
      {isOpened && (
        <S.Wrapper style={{ top: scrollY + 100 }}>
          <S.ModalInputWrapper>
            <S.ModalTitle>태그 추가</S.ModalTitle>
            <S.ModalInputBar>
              <S.ModalForm onSubmit={handleAddTags}>
                <S.ModalInput onChange={handleInputChange} value={inputValue} />
                <S.ModalAddButton type="submit">추가</S.ModalAddButton>
              </S.ModalForm>
              <S.DuplicateTagMessage>
                {isDuplicateTag ? "중복된 태그가 있습니다." : ""}
              </S.DuplicateTagMessage>
            </S.ModalInputBar>
          </S.ModalInputWrapper>
          <S.ModalTagWrapper>
            {tags.map((item, index) => (
              <Button key={`${memoId}-${index}`} type="TAG" text={item} />
            ))}
          </S.ModalTagWrapper>
          <S.ModalButtonWrapper>
            <S.ModalSubmitButton onClick={handleSaveTags}>
              저장
            </S.ModalSubmitButton>
          </S.ModalButtonWrapper>
        </S.Wrapper>
      )}
    </>
  );
}
