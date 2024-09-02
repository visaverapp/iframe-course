import { logout } from './slices/userSlice';
import { store } from './store';

export const removeUser = () => {
  store.dispatch(logout());
};
