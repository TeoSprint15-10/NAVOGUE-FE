export type TextMemo = {
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
