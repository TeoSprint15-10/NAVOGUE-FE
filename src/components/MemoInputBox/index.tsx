import { S } from "./style";
import useInput from "../../hooks/useInput";
import useCreateMemo from "../../hooks/useCreateMemo";

export default function MemoInputBox() {
  const { value, onChange, setValue } = useInput("");
  const { postMemo } = useCreateMemo();

  const onClickBtn = () => {
    if (value.trim() === "") {
      alert("메모를 작성해 주세요");
      setValue("");
      return;
    }
    postMemo(value);
    setValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e); // useInput 커스텀 훅에 전달
  };
  return (
    <S.Container>
      <S.TextArea
        value={value}
        onChange={handleChange}
        placeholder={"메모를 입력해 주세요"}
      />
      <S.Button onClick={onClickBtn}>메모 추가</S.Button>
    </S.Container>
  );
}
