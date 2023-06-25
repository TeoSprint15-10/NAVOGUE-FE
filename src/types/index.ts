export type TextContentType = "TEXT";
export type UrlContentType = "URL";

export type TextMemo = {
  id: number;
  contentType: TextContentType;
  content: string;
  isPinned: boolean;
  tags: Tag[];
  createAt: string;
};

export type UrlMemo = {
  id: number;
  contentType: UrlContentType;
  openGraph: OpenGraph;
  isPinned: boolean;
  tags: Tag[];
  createAt: string;
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
