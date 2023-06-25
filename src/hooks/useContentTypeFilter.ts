import { useRef, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { filterState } from "../recoil/atoms/filterState";

// 컨텐츠 타입에 따른 필터링

const useContentTypeFilter = () => {
  const [filterInfo, setFilterInfo] = useRecoilState(filterState);
  console.log(filterInfo);
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

    switch (FILTER_TYPE_IDX.current) {
      case 0:
        setFilterInfo({ triggerType: undefined, target: undefined });
        break;
      case 1:
        setFilterInfo({ triggerType: "type", target: "URL" });
        break;
      case 2:
        setFilterInfo({ triggerType: "type", target: "TEXT" });
        break;
    }
  }, [crntFilterState]);

  return { crntFilterState, onClickType, FILTER_TYPE };
};

export default useContentTypeFilter;
