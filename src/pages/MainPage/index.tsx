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
import { getMemoSearchedList } from "../../api/memo";
import { useIntersectionObserver } from "../../hooks/useIntersectionObeserver";
import Header from "../../components/Header";

export default function MainPage() {
  const [filterInfo, setFilterInfo] = useRecoilState(filterState);

  const { data, fetchNextPage, refetch, isLoading, isFetching } =
    useInfiniteQuery({
      queryKey: [QUERY_KEY.MEMO_LIST],
      queryFn: ({ pageParam = 0 }) =>
        getMemoSearchedList(
          pageParam,
          filterInfo.triggerType,
          filterInfo.target
        ),
      getNextPageParam: (lastPage) =>
        lastPage.last ? undefined : lastPage.pageable.pageNumber + 1,

      refetchOnWindowFocus: false,
    });

  const { targetRef } = useIntersectionObserver({
    isFetching,
    hasNextPage: !data?.pages[0].last,
    fetchNextPage,
  });

  useEffect(() => {
    refetch();
  }, [filterInfo]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <S.Container>
      <Header />
      <Sidebar />
      <S.MainContent>
        <MemoInputBox />
        <FilterCheckbox />
        <CardList
          cardList={data?.pages.flatMap((page) => page.content)}
        ></CardList>
        <div ref={targetRef}></div>
      </S.MainContent>
    </S.Container>
  );
}
