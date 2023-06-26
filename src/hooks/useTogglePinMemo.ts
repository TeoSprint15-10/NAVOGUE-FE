import { useMutation, useQueryClient } from "@tanstack/react-query";
import { togglePinMemo } from "../api/memo";
import { QUERY_KEY } from "../constants/key";

export const useTogglePinMemo = (memoId: number) => {
  const queryClient = useQueryClient();

  return useMutation(() => togglePinMemo(memoId), {
    onSuccess: () => {
      queryClient.refetchQueries([QUERY_KEY.MEMO_LIST]);
    },
    onError: (err) => console.log(err),
  });
};
