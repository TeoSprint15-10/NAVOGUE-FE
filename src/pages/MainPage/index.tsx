import Sidebar from "../../components/Sidebar";
import MemoInputBox from "../../components/MemoInputBox";
import CardList from "../../components/Card/CardList";
import { useMemoList } from "../../hooks/queries/memoList";
import FilterCheckbox from "../../components/FilterCheckbox";
import { S } from "./style";

export default function MainPage() {
  const { data: memoList } = useMemoList();

  return (
    <S.Container>
      <Sidebar />
      <S.MainContent>
        <MemoInputBox />
        <FilterCheckbox />
        <CardList cardList={memoList?.content}></CardList>;
      </S.MainContent>
    </S.Container>
  );
}
