import { S } from "./style";
import Button from "../Button";

export interface ButtonStyle {
  width: string;
  height: string;
  buttonColor?: string;
  borderRadius?: string;
  fontColor?: string;
  fontSize?: string;
  text: string;
}
export default function MemoInputBox() {
  return (
    <S.Container>
      <S.TextArea placeholder={"메모를 입력해 주세요"} />
      <Button text={"메모 추가"} type={"MEMO"} />
    </S.Container>
  );
}
