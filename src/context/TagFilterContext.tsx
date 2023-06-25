import React, { createContext, useState } from "react";
import { Memo } from "../types/index";

type FilteredMemoContextType = {
  filterTag: Memo[] | undefined;
  setFilterTag:
    | React.Dispatch<React.SetStateAction<Memo[] | undefined>>
    | undefined;
};

export const FilterTagContext = createContext<
  FilteredMemoContextType | undefined
>(undefined);

export const FilterTagProvider: React.FC = ({ children }) => {
  const [filterTag, setFilterTag] = useState<Memo[] | undefined>(undefined);

  return (
    <FilterTagContext.Provider value={{ filterTag, setFilterTag }}>
      {children}
    </FilterTagContext.Provider>
  );
};
