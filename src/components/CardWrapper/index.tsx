import { Memo } from "../../types";
import * as S from "./style";

interface CardWrapperProps {
  children: React.ReactNode;
  card: Memo;
}

// pin 버튼, edit 버튼, 태그버튼 추가 예정
export default function CardWrapper({ children, card }: CardWrapperProps) {
  return <S.CardWrapper>{children}</S.CardWrapper>;
}
