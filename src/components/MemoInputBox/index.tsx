import { S } from "./style";
import Button from "../Button";
import useInput from "../../hooks/useInput";
import useCreateMemo from "../../hooks/useCreateMemo";
export default function MemoInputBox() {
  const { value, onChange } = useInput();
  const { postMemo } = useCreateMemo();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e); // useInput 커스텀 훅에 전달
  };
  return (
    <S.Container>
      <S.TextArea value={value} onChange={handleChange} placeholder={"메모를 입력해 주세요"} />
      <Button onClick={() => postMemo(value)} text={"메모 추가"} type={"MEMO"} />
    </S.Container>
  );
}
