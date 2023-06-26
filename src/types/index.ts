export type TextContentType = "TEXT";
export type UrlContentType = "URL";

export type TextMemo = {
  id: number;
  contentType: TextContentType;
  content: string;
  pinned: boolean;
  tags: Tag[];
  createAt: string;
};

export type UrlMemo = {
  id: number;
  contentType: UrlContentType;
  openGraph: OpenGraph;
  pinned: boolean;
  tags: Tag[];
  createAt: string;
  content: string;
};

type OpenGraph = {
  id: number;
  memo: {
    id: number;
    userId: 0;
    content: string;
    contentType: UrlContentType;
    createdAt: string;
    isPinned: boolean;
  };
  ogTitle: string;
  ogDesc: string;
  ogImageUrl: string;
};

export type Tag = string;

export type MemoTagListData = {
  memoId: string;
  tagNames: string[];
};

export type MemoTagData = {
  memoId: string;
  tagName: string;
};
