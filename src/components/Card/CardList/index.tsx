import * as S from "./style";
import CardWrapper from "../CardWrapper";
import { TextMemo, UrlMemo } from "../../../types";

interface CardListProps {
  cardList: (TextMemo | UrlMemo)[] | undefined;
}

export default function CardList({ cardList }: CardListProps) {
  console.log(cardList);
  return (
    <S.CardListWrapper>
      {cardList?.map((card, idx: number) => (
        <CardWrapper key={idx} card={card}></CardWrapper>
      ))}
    </S.CardListWrapper>
  );
}
