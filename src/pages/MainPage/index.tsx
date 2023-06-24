import CardList from "../../components/CardList";
import { useMemoList } from "../../hooks/queries/memoList";

export default function MainPage() {
  const { data: memoList } = useMemoList();

  return <CardList cardList={memoList}></CardList>;
}
