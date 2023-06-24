import Sidebar from "../../components/Sidebar";
import MemoBox from "../../components/MemoBox";
import CardList from "../../components/CardList";
import { useMemoList } from "../../hooks/queries/memoList";
import { S } from "./style";

export default function MainPage() {
  const { data: memoList } = useMemoList();

  return (
    <S.Container>
      <Sidebar />
      <S.MainContent>
        <MemoBox />
        <CardList cardList={memoList}></CardList>;
      </S.MainContent>
    </S.Container>
  );
}
