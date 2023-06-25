import * as S from "./style";
import CardWrapper from "../CardWrapper";
import { Memo } from "../../../types";

export interface CardListProps {
  cardList: Memo[] | undefined;
}

export default function CardList({ cardList }: CardListProps) {
  console.log(cardList);

  return (
    <S.CardListWrapper>
      {cardList?.map((card, idx) => (
        <CardWrapper key={idx} card={card}></CardWrapper>
      ))}
    </S.CardListWrapper>
  );
}
