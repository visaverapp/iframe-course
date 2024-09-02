import { rootActions } from '../store/store';

import { useMemo } from 'react';

import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export function useActions() {
  const dispatch = useDispatch();

  const action = useMemo(() => {
    return bindActionCreators(rootActions, dispatch);
  }, [dispatch]);

  return action;
}
