import { S } from "./style";
import Button from "../Button";
import { Memo } from "../../types/index";
import { useEffect, useState } from "react";
import { FilterTagContext } from "../../context/TagFilterContext";

interface CardListProps {
  cardList: Memo[] | undefined;
}
// 태그 click 발생하면 해당 태그가 포함된 card만 filter
const Sidebar = ({ cardList }: CardListProps) => {
  const [filteredMemo, setFilteredMemo] = useState(cardList);
  const [filterActive, setFilterActive] = useState(false);
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (tagName: string) => {
    if (filterActive && activeButton === tagName) {
      // 현재 클릭된 tag가 이미 활성화된 상태라면 필터링 해제
      setFilterActive(false);
      setFilteredMemo(cardList);
      setActiveButton("");
    } else {
      // 다른 tag나 비활성화된 상태의 tag를 클릭했을 때 필터링 수행
      setFilterActive(true);
      const filteredMemos =
        cardList?.filter((card) => {
          return card.tags.some((tag) => tag.name === tagName);
        }) || [];
      setFilteredMemo(filteredMemos);
      setActiveButton(tagName);
    }
  };
  // 삭제 consol
  console.log(filteredMemo);

  // 생성된 메모 List에서 태그추출하여 사이드바 목록 생성
  const tagButtons = cardList?.map((card, idx) => {
    const { name } = card.tags[0];
    return (
      <Button
        key={idx}
        type={"SIDEBAR"}
        text={name}
        onClick={() => handleButtonClick(name)}
      />
    );
  });
  return <S.Container>{tagButtons}</S.Container>;
};
export default Sidebar;
