import { useEffect, useRef } from "react";
import { InfiniteQueryObserverResult } from "@tanstack/react-query";

interface useIntersectionObserverProps {
  threshold?: number;
  isFetching: boolean;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
}

export const useIntersectionObserver = ({
  threshold = 0.5,
  isFetching,
  hasNextPage,
  fetchNextPage,
}: useIntersectionObserverProps) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
  };

  useEffect(() => {
    if (isFetching || !targetRef.current) return;

    const observer = new IntersectionObserver(observerCallback, {
      threshold,
    });

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [targetRef.current, isFetching]);

  return { targetRef };
};
