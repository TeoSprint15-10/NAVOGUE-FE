import { Memo } from "../../types";

interface CardWrapperProps {
  children: React.ReactNode;
  card: Memo;
}

// pin 버튼, edit 버튼, 태그버튼 추가 예정
export default function CardWrapper({ children, card }: CardWrapperProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
