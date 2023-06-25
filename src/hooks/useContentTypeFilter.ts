import { useEffect, useRef, useState } from "react";
import { getMemoSearchedList } from "../api/memo";
// 컨텐츠 타입에 따른 필터링

const useContentTypeFilter = () => {
  const [crntFilterState, setCrntFilterState] = useState([false, false, false]);

  const FILTER_TYPE = ["ALL", "URL", "TEXT"];
  const FILTER_TYPE_IDX = useRef<number>(0);
  const onClickType = (id: number) => {
    setCrntFilterState((prevState) => {
      const updatedFilterState = prevState.map((state, index) => {
        return index === id ? true : false;
      });
      return updatedFilterState;
    });
  };

  useEffect(() => {
    FILTER_TYPE_IDX.current = crntFilterState.indexOf(true);
    if (FILTER_TYPE_IDX.current === 0) {
      const getMemoData = getMemoSearchedList();
    } else {
      const getMemoData = getMemoSearchedList("keyword", `${FILTER_TYPE[FILTER_TYPE_IDX.current]}`);
    }
  }, [crntFilterState]);

  return { crntFilterState, onClickType, FILTER_TYPE };
};

export default useContentTypeFilter;
