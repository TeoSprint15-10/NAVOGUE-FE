import { S } from "./style";
import Sidebar from "../../components/Sidebar";
import MemoBox from "../../components/MemoBox";
export default function MainPage() {
  return (
    <S.Container>
      <Sidebar />
      <S.MainContent>
        <MemoBox />
      </S.MainContent>
    </S.Container>
  );
}
