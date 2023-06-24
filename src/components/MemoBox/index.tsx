import { S } from "./style";

export default function MemoBox() {
  return (
    <S.Container>
      <S.TextArea placeholder={"메모를 입력해 주세요"} />
      <S.Button>메모 추가</S.Button>
    </S.Container>
  );
}
