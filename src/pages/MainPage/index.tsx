import Sidebar from "../../components/Sidebar";
import MemoInputBox from "../../components/MemoInputBox";
import CardList from "../../components/Card/CardList";
import FilterCheckbox from "../../components/FilterCheckbox";
import { S } from "./style";
import { useInfiniteQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../constants/key";
import { getMemoList } from "../../api/memo";
import { useIntersectionObserver } from "../../hooks/useIntersectionObeserver";

export default function MainPage() {
  const { data, fetchNextPage, isLoading, isError } = useInfiniteQuery({
    queryKey: [QUERY_KEY.MEMO_LIST],
    queryFn: ({ pageParam = 1 }) => getMemoList(pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.last ? undefined : lastPage.pageable.pageNumber + 1,

    refetchOnWindowFocus: false,
  });

  const { targetRef } = useIntersectionObserver({
    hasNextPage: !data?.pages[0].last,
    fetchNextPage,
  });

  const memoList = data?.pages.flatMap((page) => page.content);

  return (
    <S.Container>
      <Sidebar />
      <S.MainContent>
        <MemoInputBox />
        <FilterCheckbox />
        <CardList cardList={memoList}></CardList>
        <div ref={targetRef}></div>
      </S.MainContent>
    </S.Container>
  );
}
