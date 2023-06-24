import * as S from "./style";
import CardWrapper from "../CardWrapper";
import { Memo } from "../../types";

interface CardListProps {
  cardList: Memo[] | undefined;
}

export default function CardList({ cardList }: CardListProps) {
  const TextMemoContent = ({ content }: { content: string }) => (
    <span>{content}</span>
  );

  return (
    <S.CardListWrapper>
      {cardList?.map((card, idx) => (
        <CardWrapper key={idx} card={card}>
          <TextMemoContent content={card.content} />
        </CardWrapper>
      ))}
    </S.CardListWrapper>
  );
}
