import Sidebar from "../../components/Sidebar";
import MemoInputBox from "../../components/MemoInputBox";
import CardList from "../../components/Card/CardList";
import { useMemoList } from "../../hooks/queries/memoList";
import FilterCheckbox from "../../components/FilterCheckbox";
import { useRecoilState } from "recoil";
import { filterState } from "../../recoil/atoms/filterState";
import { S } from "./style";
import { useEffect } from "react";

export default function MainPage() {
  const [filterInfo, setFilterInfo] = useRecoilState(filterState);
  console.log(filterInfo);

  const { data: memoList, isLoading, refetch } = useMemoList(filterInfo.triggerType, filterInfo.target);

  useEffect(() => {
    refetch();
  }, [filterInfo]);
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
