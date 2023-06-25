import { TextMemo, UrlMemo } from "../types";

export function isTextMemo(card: TextMemo | UrlMemo): card is TextMemo {
  return card.contentType === "TEXT";
}

export function isUrlMemo(card: TextMemo | UrlMemo): card is UrlMemo {
  return card.contentType === "URL";
}
