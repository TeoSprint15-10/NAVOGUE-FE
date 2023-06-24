import { useQuery } from "@tanstack/react-query";
import { getMemoList } from "../../api/memo";
import { QUERY_KEY } from "../../constants/key";

export function useMemoList() {
  return useQuery({
    queryKey: [QUERY_KEY.MEMO_LIST],
    queryFn: () => getMemoList(),
  });
}
