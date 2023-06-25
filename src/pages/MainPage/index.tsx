import Sidebar from "../../components/Sidebar";
import MemoInputBox from "../../components/MemoInputBox";
import CardList from "../../components/Card/CardList";
import { useMemoList } from "../../hooks/queries/memoList";
import { S } from "./style";

export default function MainPage() {
  const { data: memoList } = useMemoList();

  return (
    <S.Container>
      <Sidebar />
      <S.MainContent>
        <MemoInputBox />
        <CardList cardList={memoList?.content}></CardList>;
      </S.MainContent>
    </S.Container>
  );
}
