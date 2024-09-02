export const API_SHARE_URL = import.meta.env.VITE_BASE_URL;
export const ACCESS_TOKEN = 'access';
export const REFRESH_TOKEN = 'refresh';
export const ONBOARDING = 'onboarding';
export const GET_IMAGE = (category: string | number) =>
  `${import.meta.env.VITE_MEDIA_URL}/photos/backgrounds/${category}.jpg`;
// `${import.meta.env.VITE_MEDIA_URL}/media/photos/backgrounds/${category}.jpg`;
