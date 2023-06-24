import { useMemoList } from "../../hooks/queries/memoList";
import Card from "../Card";

export default function CardList() {
  const { data: memoList } = useMemoList();

  return (
    <ul>
      {memoList?.map((memo) => (
        <li key={memo.id}>
          <Card>{memo.content}</Card>
        </li>
      ))}
    </ul>
  );
}
