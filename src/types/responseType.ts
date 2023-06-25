import { TextMemo, UrlMemo } from "./";

export type MemoListResponse = {
  content: (TextMemo | UrlMemo)[];
  pageable: Pageable;
  first: boolean;
  last: boolean;
  size: 6;
  number: 1;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: 3;
  empty: boolean;
};

type Pageable = {
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: 6;
  pageNumber: 1;
  pageSize: 6;
  paged: boolean;
  unpaged: boolean;
};
