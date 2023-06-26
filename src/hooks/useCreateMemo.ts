import { createMemo } from "../api/memo";

import isValidUrl from "../utils/isValidUrl";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/key";


const useCreateMemo = () => {
  const queryClient = useQueryClient();
  const { mutate: post } = useMutation(createMemo, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries([QUERY_KEY.MEMO_LIST]);
    },
    onError: (err) => console.log(err),
  });

  const postMemo = (textareaValue: string) => {
    const contentType = isValidUrl(textareaValue) ? "URL" : "TEXT";
    post({
      content: textareaValue,
      contentType,
    });
  };
  return { postMemo };
};

export default useCreateMemo;
