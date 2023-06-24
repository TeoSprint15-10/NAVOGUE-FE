import { S } from "./style";
import Sidebar from "../../components/Sidebar";
import MemoInputBox from "../../components/MemoInputBox";
export default function MainPage() {
  return (
    <S.Container>
      <Sidebar />
      <S.MainContent>
        <MemoInputBox />
      </S.MainContent>
    </S.Container>
  );
}
