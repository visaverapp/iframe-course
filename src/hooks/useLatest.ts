import { useLayoutEffect, useRef } from 'react';

export function useLatest<T>(value: T): React.MutableRefObject<T> {
  const latestValue = useRef<T>(value);

  useLayoutEffect(() => {
    latestValue.current = value;
  });

  return latestValue;
}
