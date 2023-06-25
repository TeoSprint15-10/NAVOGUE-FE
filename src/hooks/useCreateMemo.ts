import { useState } from "react";
import { createMemo } from "../api/memo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import isValidUrl from "../util/isValidUrl";

const useCreateMemo = () => {
  const { mutate: post } = useMutation(createMemo, {
    onSuccess: (data) => console.log(data),
    onError: (err) => console.log(err),
  });

  const postMemo = (textareaValue: string) => {
    const contentType = isValidUrl(textareaValue) ? "URL" : "TEXT";
    console.log(contentType);

    post({
      content: textareaValue,
      contentType,
    });
  };
  return { postMemo };
};

export default useCreateMemo;
