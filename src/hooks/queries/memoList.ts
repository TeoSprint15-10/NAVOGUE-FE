import { useQuery } from "@tanstack/react-query";
import { getMemoSearchedList } from "../../api/memo";
import { QUERY_KEY } from "../../constants/key";

export function useMemoList(filterType: string | undefined, target: string | undefined) {
  return useQuery({
    queryKey: [QUERY_KEY.MEMO_LIST],
    queryFn: () => getMemoSearchedList(0, filterType, target),
  });
}
