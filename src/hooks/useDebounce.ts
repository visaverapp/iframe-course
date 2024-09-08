import { useLatest } from './useLatest';

import { useMemo } from 'react';

import { debounce } from 'ts-debounce';

export function useDebounce<T extends (...args: any[]) => any>(callback: T, ms: number) {
  const memoCallback = useLatest(callback);

  return useMemo(
      () =>
          debounce((...args: Parameters<T>) => {
            memoCallback.current(...args);
          }, ms),
      [ms, memoCallback],
  );
}
