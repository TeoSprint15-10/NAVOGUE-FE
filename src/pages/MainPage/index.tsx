import Sidebar from "../../components/Sidebar";
import MemoInputBox from "../../components/MemoInputBox";
import CardList from "../../components/Card/CardList";
import FilterCheckbox from "../../components/FilterCheckbox";
import { useRecoilState } from "recoil";
import { filterState } from "../../recoil/atoms/filterState";
import { S } from "./style";

import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../constants/key";
import { getMemoList } from "../../api/memo";
import { useIntersectionObserver } from "../../hooks/useIntersectionObeserver";
import { useMemoList } from "../../hooks/queries/memoList";

export default function MainPage() {
  const [filterInfo, setFilterInfo] = useRecoilState(filterState);
  // const { data, fetchNextPage } = useInfiniteQuery({
  //   queryKey: [QUERY_KEY.MEMO_LIST],
  //   queryFn: ({ pageParam = 0 }) => getMemoList(pageParam),
  //   getNextPageParam: (lastPage) => (lastPage.last ? undefined : lastPage.pageable.pageNumber + 1),

  //   refetchOnWindowFocus: false,
  // });

  // const { targetRef } = useIntersectionObserver({
  //   hasNextPage: !data?.pages[0].last,
  //   fetchNextPage,
  // });
  const { data: memoList, isLoading, refetch } = useMemoList(filterInfo.triggerType, filterInfo.target);

  useEffect(() => {
    refetch();
  }, [filterInfo]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <S.Container>
      <Sidebar />
      <S.MainContent>
        <MemoInputBox />
        <FilterCheckbox />
        <CardList cardList={memoList}></CardList>
        {/* <div ref={targetRef}></div> */}
      </S.MainContent>
    </S.Container>
  );
}
