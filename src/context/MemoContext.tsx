import React, { createContext, useContext, useState } from "react";
import { TextMemo } from "../types";

interface MemoContextData {
  memoList: TextMemo[] | undefined;
  setMemoList: React.Dispatch<React.SetStateAction<TextMemo[] | undefined>>;
}

export const MemoContext = createContext<MemoContextData>({
  memoList: undefined,
  setMemoList: () => {},
});

export const MemoProvider = ({ children }: { children: React.ReactNode }) => {
  const [memoList, setMemoList] = useState<TextMemo[]>();

  return (
    <MemoContext.Provider value={{ memoList, setMemoList }}>
      {children}
    </MemoContext.Provider>
  );
};

export const useMemoContext = (): MemoContextData => useContext(MemoContext);
