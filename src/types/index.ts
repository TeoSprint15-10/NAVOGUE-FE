export type Memo = {
  id: number;
  type: string;
  content: string;
  isPinned: boolean;
  tags: Tag[];
};

export type Tag = {
  id: number;
  name: string;
};

export type MemoTagListData = {
  memoId: string;
  tagNames: string[];
};
